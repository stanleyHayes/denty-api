const express = require("express");
const router = express.Router();

const Appointment = require("../models/Appointment");

//booking an appointment
//status code 201 successful appointment booking
//status code 500 server error
router.post("/", async function (req, res, next) {
    try {
        const appointment = {
            description: req.body.description,
            appointment_date: req.body.appointment_date,
            patient: req.body.patient,
            dentist: req.body.dentist,
        };
        const createdAppointment = await Appointment.create(appointment);
        return res.status(201).json({appointment: createdAppointment});
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});


//deleting/cancelling an appointment
//status code 200 successful deleting booking
//status code 500 server error
router.delete("/:appointmentID", async function (req, res, next) {
    try {
        const appointmentID = req.params.appointmentID;
        await Appointment.findByIdAndRemove(appointmentID);
        if (await Appointment.findById(appointmentID)) {
            return res.status(400).json({error: "Could not delete Appointment"});
        } else {
            return res.status(200).json({message: "Appointment deleted"});
        }
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
        const appointmentID = req.params.appointmentID;
        const appointment = await Appointment.findById(appointmentID);

        //if article not found
        if (!appointment) {
            return res.status(404).json({error: "Appointment not found"});
        } else {
            const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentID, req.body, {new: true});
            return res.status(200).json({appointment: updatedAppointment});
        }
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
        const appointmentID = req.params.appointmentID;
        const appointment = await Appointment.findById(appointmentID);
        if (!appointment) {
            return res.status(404).json({error: "Appointment not found"});
        } else {
            return res.status(200).json({appointment: appointment});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

//getting appointments by status, patient, dentist
//status code 200 successful appointment acquisition
//status code 500 server error
router.get("/", async function (req, res, next) {
    try {
        const queryParams = req.query;
        const appointments = await Appointment.find(queryParams);
        return res.status(200).json({appointments: appointments});
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

//assigning an appointment
//status code 200 successful appointment assignment
//status code 400 appointment not found
//status code 500 server error
router.put("/:appointmentID/toggle-assign", async function (req, res, next) {
    try {
        const appointmentID = req.params.appointmentID;
        let appointment = await Appointment.findById(appointmentID);
        const dentistID = req.body.dentistID;
        //if appointment not found
        if (!appointment) {
            return res.status(404).json({error: "Appointment not found"});
        } else {
            if(appointment.dentist){
                appointment.dentist = null;
            }else {
                appointment.dentist = dentistID;
                appointment.save();
            }
            let updatedAppointment = await Appointment.findById(appointmentID);
            return res.status(200).json({appointment: updatedAppointment});
        }
    } catch (e) {
        return res.status(500).json({error: e.message});
    }
});

module.exports = router;