const mongoose = require("mongoose")

const VolunteerSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add name"]
        },
        surname: {
            type: String,
            required: [true, "Please add surname"]
        },
        age: {
            type: String,
            required: [true, "Please add age"]
        },
        gender: {
            type: String,
            required: [true, "Please add gender"]
        },
        phoneNumber: {
            type: String,
            required: [true, "Please add age"]
        },
        email: {
            type: String,
            required: [true, "Please add email"]
        },
        previouslyApplied: {
            type: Boolean,
            required: [true, "Please add previously"]
        },
        new: {
            type: Boolean,
            default: true
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model("Volunteer", VolunteerSchema)