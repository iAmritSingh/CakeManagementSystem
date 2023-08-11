const router = require('express').Router();
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

router.get("/", async (req, res) => {
    try {
        const cats = await Product.find();
        res.status(200).json(cats);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


router.post("/add", async (req, res) => {
    try {
        // res.render("HELLO WORLS");
        // console.log(req.body);
        const newProduct = new Product(
            // Name: req.body.Name,
            // Email: req.body.Email,
            // Phone: req.body.Phone,
            // Password: req.body.Password
            req.body

        );

        const product = await newProduct.save();
        res.json({ message: "Added" });
    }
    catch (err) {
        res.json({ message: err });
    }
});

router.delete("/:id", async (req, res) => {

    const delPost = await Product.findOne({ Item: req.params.id });

    try {
        await delPost.delete();
        res.json({ message: "Deleted" });
    }
    catch (err) {
        res.json({ message: err });
    }




});

router.put("/edit", async (req, res) => {
    // try {

    // if (post.username === req.body.username) {
    try {
        const post = await Product.findOneAndUpdate({ Item: req.body.Item }, { $set: req.body });

        res.json({ message: "updated" });
    } catch (err) {
        res.json({ message: err });

    }


});






module.exports = router;
