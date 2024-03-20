var express = require("express");
var userModel = require("../models/user");
var router = express.Router();

/* GET users listing. */
router.post("/signup", async function (req, res) {
  const user = new userModel(req.body);
  try {
    const saveUser = await user.save();
    console.log(saveUser);
    res.status(201).json(saveUser);
  } catch (error) {
    console.log(error);
    res.status(401).json({ error: error });
  }
});

module.exports = router;
