const mongoose = require("mongoose")

const OrganizationSchema = mongoose.Schema({
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
        email: {
            type: String,
            required: [true, "Please add email"]
        },
        number: {
            type: String,
            required: [true, "Please add address"]
        }
    },
    {
        versionKey: false
    }
)

module.exports = mongoose.model('Funding Organization', OrganizationSchema)