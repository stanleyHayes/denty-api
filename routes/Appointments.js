const express = require("express");
const router = express.Router();


//booking an appointment
//status code 201 successful appointment booking
//status code 500 server error
router.post("/", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//deleting/cancelling an appointment
//status code 200 successful deleting booking
//status code 500 server error
router.delete("/:appointmentID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//updating an appointment
//status code 200 successful appointment update
//status code 404 appointment not found
//status code 500 server error
router.put("/:appointmentID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting an appointment
//status code 200 successful appointment acquisition
//status code 404 appointment not found
//status code 500 server error
router.get("/:appointmentID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

//getting appointments by status, patient, dentist
//status code 200 successful appointment acquisition
//status code 500 server error
router.get("/", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

//assigning an appointment
//status code 200 successful appointment assignment
//status code 400 appointment not found
//status code 500 server error
router.put("/:appointmentID", async function (req, res, next) {
    try {

    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

module.exports = router;