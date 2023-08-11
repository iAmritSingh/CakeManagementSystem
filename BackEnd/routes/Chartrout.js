const router = require('express').Router();
const Chart = require("../models/Charts");
const Product = require("../models/Product");

// router.post("/",async(req,res)=>{
//     const newcategory = new Category(req.body);
//     try {
//         const savedCategory = await newcategory.save();
//         res.status(200).json(savedCategory);
//     } catch (err) {
//         res.status(500).json(err);        
//     }
// });

router.post("/", async (req, res) => {
    try {
        const cats = await Chart.find({ Email: req.body.Email });
        res.json(cats);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


router.post("/add", async (req, res) => {
    try {
        // res.render("HELLO WORLS");
        // console.log(req.body);
        // const post = await Product.findOne({ Item: req.body.Item });
        // const newProduct = new Chart(
        // {
        //     Name: post.Name,
        //     Item: post.Item,
        //     Price: post.Price,
        //     Desc: post.Desc

        // }
        // req.body;

        //    );
        const newProduct = new Chart(req.body);

        const product = await newProduct.save();
        res.json({ message: "added" });
        // res.redirect("http://127.0.0.1:5500/FrontEnd/ChartDisplay.html");

    }
    catch (err) {
        res.json({ message: err });
    }
});

router.delete("/:id/:Email", async (req, res) => {

    const delPost = await Chart.findOne({ Item: req.params.id, Email: req.params.Email });

    try {
        await delPost.delete();
        res.json({ message: "Deleted" });
    }
    catch (err) {
        res.json({ message: err });
    }




});
router.delete("/:Email", async (req, res) => {

    const delPost = await Chart.find({ Email: req.params.Email });

    try {
        for (let i in delPost) {
            await delPost[i].delete();
        }

        res.json({ message: "Deleted" });
    }
    catch (err) {
        res.json({ message: err });
    }




});

router.post("/edit", async (req, res) => {
    // try {
    const post = await Product.findOne({ Item: req.body.id });
    // if (post.username === req.body.username) {
    try {
        const updatedPost = await Product.updateOne(req.body.id, {
            $set: req.body
        })
        res.redirect("http://127.0.0.1:5500/FrontEnd/Menu.html");
    } catch (err) {
        res.status(400).json(err);

    }

    // }
    // else {
    //     res.status(401).json("You can update only your post");
    // }

    // } catch (err) {
    //     res.status(500).json(err);
    // }
});






module.exports = router;
