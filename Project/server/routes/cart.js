const express = require("express");
const router = express.Router();
const Cart = require("../models/Cart");


router.get('/', async (req, res) => {
    try {
        const carts = await Cart.find();
        res.status(200).json(carts);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const cart = await Cart.findById(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/', async (req, res) => {
    if(req.body.name === "") {
        res.status(422).send("Name cannot be empty!");
    } 
    const cart = new Cart({
        products: req.body.product,
    });

    try {
        const savedCart = await cart.save();
        res.status(200).json(savedCart);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;
    Cart.findById(id, (err, cart) => {
        if(!cart) {
            res.status(404).send("Product not found! - ID: " + id);
        } else if(req.body.name === "") {
            res.status(422).send("Name cannot be empty!");
        } else {
            cart.products = req.body.products;

            cart
                .save()
                .then(products => {
                    res.status(200).json(products);
                })
                .catch(err => res.status(500).send(err.message));
        }
    });
});



router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const removedCart = await Cart.deleteOne({ _id: id });

        res.status(200).json(removedCart);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/', (req, res) => {
    console.log(req.body)
});

module.exports = router;