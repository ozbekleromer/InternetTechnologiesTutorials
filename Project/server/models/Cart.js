const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CartSchema = new mongoose.Schema({
    products: {
        type: Array,
        default: []
    },
});

const Cart = mongoose.model("CartData", CartSchema, "cartdatas");
module.exports = Cart;