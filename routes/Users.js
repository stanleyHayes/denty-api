const express = require("express");
const router = express.Router();
const User = require("../models/User");

//Create new User Account
//status 200 for successful authentication
//status 409 user already exist
//status 500 server error
router.post("/register", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Login existing user
//status 200 for successful authentication
//status 401 Authentication Failed
//status 500 server error
router.post("/login", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Changing user password
//status 200 for successful authentication
//status 401 Authentication Failed
//status 500 server error
router.post("/change-password", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Changing user password
//status 200 for successful change of password
//status 401 Authentication Failed
//status 500 server error
router.post("/reset-password", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Getting a user
//status 200 getting uer
//status 404 user not found
//status 500 server error
router.get("/:userID", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Getting a users by role
//status 200 getting users
//status 500 server error
//query params ?role=role
router.get("/", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//Deleting a user by id
//status 200 deleting user
//status 404 user not found
//status 500 server error
router.delete("/:userID", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});

//updating a user by id
//status 200 updating user
//status 404 user not found
//status 500 server error
router.put("/:userID", async function (req, res, next) {
    try {

    }catch (e) {
        return res.status(500).json({error: e.message});
    }
});


module.exports = router;