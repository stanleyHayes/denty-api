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
        type: Date,
        required: true
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
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;