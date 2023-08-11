const mongoose = require('mongoose')

const AdminSchema = new mongoose.Schema({
    Name: {
        type: String,
        required: true,

    },
    Email: {
        type: String,
        required: true,
        unique: true
    },
    Phone: {
        type: String,
        required: true,
        unique: true
    },
    Password: {
        type: String,
        required: true,

    },
    Address: {
        type: String,


    }

}
);

module.exports = mongoose.model("Admin", AdminSchema);