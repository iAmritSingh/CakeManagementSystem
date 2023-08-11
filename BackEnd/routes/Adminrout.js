const router = require('express').Router();
const Admin = require("../models/Admin");



router.post("/login", async (req, res) => {
    try {
        const user = await Admin.findOne({ Email: req.body.Email });
        // console.log(admin);
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
        res.status(500).json(err);
    }
});

router.post("/register", async (req, res) => {
    try {
        // res.render("HELLO WORLS");
        console.log(req.body);
        const newAdmin = new Admin(
            // Name: req.body.Name,
            // Email: req.body.Email,
            // Phone: req.body.Phone,
            // Password: req.body.Password
            req.body

        );

        const admin = await newAdmin.save();
        res.redirect("http://127.0.0.1:5500/FrontEnd/admin.html");
    }
    catch (err) {
        res.status(500).json(err);
    }
});






module.exports = router;
