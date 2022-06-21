const express = require("express");
const Router = express.Router();
const User = require("../Models/user");

Router.post("/signup", async (req, res) => {
  try {
    let createUser = await User.findOne({ Email: req.body.Email });
    if (createUser) {
      return res
        .status(400)
        .json({ success: false, message: "the user is already exist" });
    }

    createUser = await new User({
      Name: req.body.Name,
      Password: req.body.Password,
      Email: req.body.Email,
    });
    createUser.save();
    //   console.log(req.body);
    res.json({ message: "succesfully created User", data: createUser });
  } catch (error) {
    console.error(error);
    res.status(500).send("internal server error");
  }
});

Router.post("/signIN", async (req, res) => {
  const { Email, Password } = req.body;
  try {
    let user = await User.findOne({
      Email: Email,
      Password: Password,
    });
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Please enter registered email or Password",
      });
    } else {
      return res.json({
        success: true,
        message: "user login succesfully",
      });
    }
  } catch (error) {
    console.log(error);
  }
});
// Router.get()
module.exports = Router;
