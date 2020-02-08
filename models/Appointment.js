const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
    description: {
        type: String,
        required: true
    },
    appointment_date: {
        type: Date,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    dentist: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date_created: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ["vacant", "assigned", "resolved"],
        default: "vacant"
    }
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);

module.exports = Appointment;
