const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    Item: {
        type: Number,
        required: true,
        // unique: true
    },
    Name: {
        type: String,
        required: true

    },
    Price: {
        type: String,
        required: true

    },
    Desc: {
        type: String,
        // required: true

    },
    Email: {
        type: String
    },
    Status: {
        type: String
    },
    Address: {
        type: String
    }



}
);

module.exports = mongoose.model("Orders", OrderSchema);