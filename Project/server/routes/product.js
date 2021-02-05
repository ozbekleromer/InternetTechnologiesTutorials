const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/', async (req, res) => {
    if(req.body.name === "") {
        res.status(422).send("Name cannot be empty!");
    } 
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        detail: req.body.detail,
    });

    try {
        const savedProduct = await product.save();
        res.status(200).json(savedProduct);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/:id', async (req, res) => {
    const id = req.params.id;
    Product.findById(id, (err, product) => {
        if(!product) {
            res.status(404).send("Product not found! - ID: " + id);
        } else if(req.body.name === "") {
            res.status(422).send("Name cannot be empty!");
        } else {
            product.name = req.body.name;
            product.price = req.body.price;
            product.detail = req.body.detail;

            product
                .save()
                .then(product => {
                    res.status(200).json(product);
                })
                .catch(err => res.status(500).send(err.message));
        }
    });
});



router.delete("/:id", async (req, res) => {
    const id = req.params.id;

    try {
        const removedProduct = await Product.deleteOne({ _id: id });

        res.status(200).json(removedProduct);
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.post('/', (req, res) => {
    console.log(req.body)
});

module.exports = router;