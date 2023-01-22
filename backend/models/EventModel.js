const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
        type: {
            type: Object,
            required: [true, "Please add type"]
        },
        name: {
            type: Object,
            required: [true, "Please add name"]
        },
        description: {
            type: Object,
            required: [true, "Please add description"]
        },
        place: {
            type: Object,
            required: [true, "Please add place"]
        },
        date: {
            type: Object,
            required: [true, "Please add date"]
        },
        financiers: {
            type: Array,
            required: [true, "Please add financiers"],
        },
        volunteers: {
            type: Array,
            required: [false]
        }
    },
    {
        versionKey: false
    })

module.exports = mongoose.model("Events", eventSchema)