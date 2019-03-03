const passport = require("passport");
const keys = require("./keys")
const GoogleStrategy = require("passport-google-oauth20")
const users = require("../Models/models")


passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    } , (accessToken , refreshToken , profile , done) => {
            console.log("Hitting the profile");
            users.find({ gid : profile.id})
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log("OPPS! " + err)
                })
    })
)