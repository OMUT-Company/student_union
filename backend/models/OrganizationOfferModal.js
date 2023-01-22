const mongoose = require("mongoose")

const OrganizationOfferSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please add name"]
        },
        director: {
            type: String,
            required: [true, "Please add director"]
        },
        address: {
            type: String,
            required: [true, "Please add address"]
        },
        number: {
            type: String,
            required: [true, "Please add number"]
        },
        email: {
            type: String,
            required: [true, "Please add email"]
        },
        message: {
            type: String,
            required: [true, "Please add message"]
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model("Organization's offer", OrganizationOfferSchema)