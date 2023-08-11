const router = require('express').Router();
const Chart = require("../models/Charts");
const user = require("../models/Users");

const Order = require("../models/Orders");



router.post("/", async (req, res) => {
    try {
        const cats = await Chart.find({ Email: req.body.Email });
        const pouser = await user.findOne({ Email: req.body.Email });
        // console.log(cats);
        for (let i in cats) {

            const neworder = new Order({
                Item: cats[i].Item,
                Name: cats[i].Name,
                Price: cats[i].Price,
                Email: cats[i].Email,
                Desc: cats[i].Desc,
                Status: "Pending",
                Address: pouser.Address

            });

            let newperson = await neworder.save();
            console.log(newperson);

        }


        res.json({ message: "order placed" });
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.post("/show", async (req, res) => {
    try {
        const cats = await Order.find({ Email: req.body.Email });
        res.json(cats);
    }
    catch (err) {
        res.status(500).json(err);
    }
});
router.get("/", async (req, res) => {
    try {
        const cats = await Order.find();
        res.json(cats);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


router.put("/edit", async (req, res) => {
    // try {

    // if (post.username === req.body.username) {
    try {
        const post = await Order.findOneAndUpdate({ Item: req.body.Item, Email: req.body.Email }, { $set: { Status: req.body.Status } });

        res.json({ message: "updated" });
    } catch (err) {
        res.json({ message: err });

    }


});





module.exports = router;
