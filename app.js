const express = require("express");
const route = require("./Controller/auth-router");
const passportSetup = require("./Config/passport-setup")
const mongoose = require("mongoose");
const keys = require("./Config/keys")
const app = express();


// Connect To MongoDB
mongoose.connect(keys.mongoDB.dbURL)
    .then(res => console.log("Connected to MongoDB"))
    .catch(err => console.log("Opps! Error!!! " + err))



app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use("/auth/" , route)

// View Engine
app.set("view engine" , "ejs");

// Static File
app.use(express.static("Public/"))

// Router
app.get("/" , (req, res) => {
    res.render("Home")
})

// Port
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Listening To Port 5000")
})