const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RecordSchema = new Schema({
    prescription: {
        type: [String],
        required: true
    },
    appointment: {
        type: Schema.Types.ObjectId,
        ref: "Appointment",
        required: true
    },
    next_appointment_date: {
        type: Date
    },
    patient: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    dentist: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    information:{
        type: String
    }
});

const Record = mongoose.model("Record", RecordSchema);

module.exports = Record;