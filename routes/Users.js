const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/User");

dotenv.config();

const UserSession = require("../controllers/UserSession");

async function hashPassword(plainTextPassword) {
    return bcrypt.hash(plainTextPassword, 10);
}

async function comparePassword(plainTextPassword, userPassword) {
    return bcrypt.compare(plainTextPassword, userPassword);
}

//Create new User Account
//status 201 for successful creation
//status 409 user already exist
//status 500 server error
router.post("/register", async function (req, res, next) {
    try {

        const user = {
            email: req.body.email,
            name: req.body.name,
            phone: req.body.phone,
            role: req.body.role,
            dob: req.body.dob,
            location: req.body.location,
            password: await hashPassword(req.body.password)
        };

        //if user already exists
        if (await User.findOne({email: req.body.email})) {
            return res.status(409).json({error: "Email Already in use"});
        } else {
            const createdUser = await User.create(user);
            return res.status(201).json({user: createdUser, message: "User created"})
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Login existing user
//status 200 for successful authentication
//status 404 for user not found
//status 401 Authentication Failed
//status 500 server error
router.post("/login", async function (req, res, next) {
    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.findOne({email: email});
        //if user not found
        if (!user) {
            return res.status(404).json({error: "No user associated with email"});
        }
        //if user found
        else {
            //if password of user is the same as password from client
            if (await comparePassword(password, user.password)) {
                const token = jwt.sign(
                    {email: email, user_id: user._id},
                    process.env.JWT_SECRET);
                await UserSession.updateSession(email, token);

                return res.status(200).json({user: user, token: token});
            } else {
                return res.status(401).json({error: "Authentication Failed"});
            }
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Changing user password
//status 200 for successful authentication
//status 401 Authentication Failed
//status 500 server error
router.put("/:userID/change-password", async function (req, res, next) {
    try {
        const userID = req.params.userID;
        const oldPassword = req.body.old_password;
        const newPassword = req.body.new_password;

        let user = await User.findById(userID);

        //if user not found
        if (!user) {
            return res.status(404).json({error: "User not found"});
        }
        //if user found
        else {
            //if password of user is the same as password from client
            if (await comparePassword(oldPassword, user.password)) {
                user.password = await hashPassword(newPassword);
                user.save();

                let updatedUser = await User.findById(userID);
                return res.status(200).json({user: updatedUser, message: "Password updated Successfully"});
            } else {
                return res.status(401).json({error: "Authentication Failed"});
            }
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Changing user password
//status 200 for successful change of password
//status 401 Authentication Failed
//status 500 server error
router.post("/reset-password", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Getting a user
//status 200 getting uer
//status 404 user not found
//status 500 server error
router.get("/:userID", async function (req, res, next) {
    try {
        const userID = req.params.userID;
        const user = await User.findById(userID);
        if (!user) {
            return res.status(404).json({error: "User not found"});
        } else {
            return res.status(200).json({user: user});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Getting a users by role
//status 200 getting users
//status 500 server error
//query params ?role=role
router.get("/", async function (req, res, next) {
    try {
        const queryParams = req.query;
        const users = await User.find(queryParams);
        return res.status(200).json({users: users});
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Deleting a user by id
//status 200 deleting user
//status 404 user not found
//status 500 server error
router.delete("/:userID", async function (req, res, next) {
    try {
        const userID = req.params.userID;
        await User.findByIdAndRemove(userID);
        if (await User.findById(userID)) {
            return res.status(400).json({error: "Could not delete user"});
        } else {
            return res.status(200).json({message: "User deleted"});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

//updating a user by id
//status 200 updating user
//status 404 user not found
//status 500 server error
router.put("/:userID", async function (req, res, next) {
    try {
        const userID = req.params.userID;
        const user = await User.findById(userID);

        //if user not found
        if (!user) {
            return res.status(404).json({error: "User not found"});
        } else {
            const updatedUser = await User.findByIdAndUpdate(userID, req.body, {new: true});
            return res.status(200).json({user: updatedUser});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


module.exports = router;