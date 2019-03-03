const mongoose = require("mongoose");


const profileSchima = new mongoose.Schema({
    gid : String,
    name : String
})

const profileModel = mongoose.model("profile" , profileSchima);

module.exports = profileModel