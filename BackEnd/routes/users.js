const router = require('express').Router();
const User = require("../models/Users");
const alert = require('alert');

// router.get("/", async (req, res) => {
//     try {
//         const cats = await .find();
//         res.status(200).json(cats);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }
// });

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ Email: req.body.Email });
        if (!user) {
            res.json({ message: "User Not Register" });
        }

        if (req.body.Password != user.Password) {
            res.json({ message: "Wrong Credientals" });
        }
        else {
            res.json({ message: "Ok", data: user });

            // res.redirect("http://127.0.0.1:5500/FrontEnd/UserProfile.html")
            // res.send(user);
        }



    } catch (err) {
        res.json({ message: err });
    }
});

router.post("/register", async (req, res) => {
    try {
        // res.render("HELLO WORLS");
        console.log(req.body);
        const newUser = new User(
            // Name: req.body.Name,
            // Email: req.body.Email,
            // Phone: req.body.Phone,
            // Password: req.body.Password
            req.body

        );

        const user = await newUser.save();
        res.redirect("http://127.0.0.1:5500/FrontEnd/Userlogin.html");
    }
    catch (err) {
        res.status(500).json(err);
    }
});



module.exports = router;
