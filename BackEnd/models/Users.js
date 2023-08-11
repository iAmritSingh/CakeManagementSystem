const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
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
        // unique: true
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

module.exports = mongoose.model("Users", UserSchema);