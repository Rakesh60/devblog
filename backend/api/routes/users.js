var express = require("express");
var userModel = require("../models/user");
var router = express.Router();

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const user = new userModel({
    name: "Vikas",
    email: "vikas@gmail.com",
    password: "vikas@123",
  });
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
