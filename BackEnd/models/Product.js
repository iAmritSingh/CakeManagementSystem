const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    Item: {
        type: Number,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        required: true

    },
    // Email: {
    //     type: String,
    //     required: true

    // },
    Price: {
        type: String,
        required: true

    },
    Desc: {
        type: String,
        required: true

    }

}
);

module.exports = mongoose.model("Product", ProductSchema);