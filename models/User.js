const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["Patient", "Dentist"]
    },
    dob: {
        type: Date
    },
    location: {
        type: {
            type: String,
            default: "Point"
        },
        coordinates: {
            type: [Number]
        }
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    articles: {
        type: [Schema.Types.ObjectId]
    },
    appointments: {
        type: [Schema.Types.ObjectId]
    },
    records: {
        type: [Schema.Types.ObjectId]
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;