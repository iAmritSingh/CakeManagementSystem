const mongoose = require('mongoose')

const ChartSchema = new mongoose.Schema({
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
    }



}
);

module.exports = mongoose.model("Charts", ChartSchema);