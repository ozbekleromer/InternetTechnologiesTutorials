const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    detail: {
        type: String,
        required: false,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model("ProductData", ProductSchema, "productdatas");
module.exports = Product;