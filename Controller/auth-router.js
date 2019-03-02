const express = require("express");
const route = express.Router();

route.get("/login" , (req , res) => {
    res.render("Login")
})
route.get("/google" , (req , res) => {
    res.send("Req Received")
})


module.exports = route;