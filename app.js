const express = require("express");
const route = require("./Controller/auth-router");
const passportSetup = require("./Config/passport-setup")
const mongoose = require("mongoose");
const keys = require("./Config/keys")
const passport = require("passport");
const cookieSession = require("cookie-session");
const app = express();


// Connect To MongoDB
mongoose.connect(keys.mongoDB.dbURL , {useNewUrlParser : true})
    .then(res => console.log("Connected to MongoDB"))
    .catch(err => console.log("Opps! Error!!! " + err))



app.use(express.urlencoded({extended : false}));
app.use(express.json());
app.use("/auth/" , route)

// View Engine
app.set("view engine" , "ejs");


app.use(cookieSession({
    maxAge : 24 * 60 * 60 * 1000,
    keys : [keys.cookie]
}))

app.use(passport.initialize());
app.use(passport.session())


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