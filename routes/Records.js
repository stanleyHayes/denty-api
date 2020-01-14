const express = require("express");
const router = express.Router();


//creating a record
//status code 201 successful record creation
//status code 500 server error
router.post("/", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//deleting a record
//status code 200 successful deleting booking
//status code 404 record not found
//status code 500 server error
router.delete("/:recordID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//updating a record
//status code 200 successful record update
//status code 404 record not found
//status code 500 server error
router.put("/:recordID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting an record
//status code 200 successful record acquisition
//status code 404 record not found
//status code 500 server error
router.get("/:recordID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting appointments by patient, dentist
//status code 200 successful record acquisition
//status code 500 server error
router.get("/", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


module.exports = router;