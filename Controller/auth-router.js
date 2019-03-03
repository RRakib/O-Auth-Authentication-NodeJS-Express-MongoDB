const express = require("express");
const passport = require("passport")
const route = express.Router();

route.get("/login" , (req , res) => {
    res.render("Login")
})
route.get("/logout" , (req , res) => {
    res.send("Log Out")
})
route.get("/google" , passport.authenticate("google" , {
    scope: ["profile"]
}))
route.get("/google/redirect" , passport.authenticate("google"),(req, res) => {
    res.render("Auth")
})

module.exports = route;