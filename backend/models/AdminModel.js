const mongoose = require("mongoose")

const adminSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add name"]
    },
    surname: {
        type: String,
        required: [true, "Please add surname"]
    },
    email: {
        type: String,
        required: [true, "Please add name"]
    },
    password:{
        type: String,
        required: [true, 'Please add a password']
    },
    verify: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Admins', adminSchema)