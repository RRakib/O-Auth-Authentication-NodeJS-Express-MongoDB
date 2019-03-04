const express = require("express");
const routeProfile = express.Router();


let authenticate = ((req, res, next) => {
    if(!req.user){
        res.redirect("/auth/login")
    }
    else{
        next();
    }
})


routeProfile.get("/" , authenticate , (req, res) => {
    res.render("Auth" , {
        name : req.user.name
    })

})

module.exports = routeProfile