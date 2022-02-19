const express = require("express");

const router = express.Router();

const User = require("../models/user.model");

router.get("", async (req, res) => {
    try {
        const users = await User.find().lean().exec();
        res.send(users);
    }
    catch (err) {
        console.log('err', err.message);
    }
})

module.exports = router;
