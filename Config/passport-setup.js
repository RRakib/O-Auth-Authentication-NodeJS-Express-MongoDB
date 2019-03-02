const passport = require("passport");
const keys = require("./keys")
const GoogleStrategy = require("passport-google-oauth20")


passport.use(
    new GoogleStrategy({
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    }) , () => ({

    })
)