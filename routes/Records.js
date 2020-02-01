const express = require("express");
const router = express.Router();
const Record = require("../models/Record");
const User = require("../models/User");

//creating a record
//status code 201 successful record creation
//status code 500 server error
router.post("/", async function (req, res, next) {
    try {
        const record = {
            prescription: req.body.prescription,
            appointment: req.body.appointment,
            patient: req.body.patient,
            dentist: req.body.dentist
        };
        const createdRecord = await Record.create(record);
        const dentist = await User.findById(req.body.dentist);
        const patient = await User.findById(req.body.patient);
        patient.appointments.push(createdRecord._id);
        patient.save();
        dentist.appointments.push(createdRecord._id);
        dentist.save();
        return res.status(201).json({record: createdRecord});
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
        const recordID = req.params.recordID;
        await Record.findByIdAndRemove(recordID);
        if (await Record.findById(recordID)) {
            return res.status(400).json({error: "Could not delete Record"});
        } else {
            return res.status(200).json({message: "Record deleted"});
        }
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
        const recordID = req.params.recordID;
        const record = await Record.findById(recordID);

        //if article not found
        if (!record) {
            return res.status(404).json({error: "Record not found"});
        } else {
            const updatedRecord = await Record.findByIdAndUpdate(recordID, req.body, {new: true});
            return res.status(200).json({record: updatedRecord});
        }
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
        const recordID = req.params.recordID;
        const record = await Record.findById(recordID);
        if (!record) {
            return res.status(404).json({error: "Record not found"});
        } else {
            return res.status(200).json({record: record});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//getting appointments by patient, dentist
//status code 200 successful record acquisition
//status code 500 server error
router.get("/", async function (req, res, next) {
    try {
        const queryParams = req.query;
        const records = await Record.find(queryParams);
        return res.status(200).json({records: records});
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


module.exports = router;