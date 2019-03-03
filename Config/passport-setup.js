const passport = require("passport");
const keys = require("./keys")
const GoogleStrategy = require("passport-google-oauth20")


passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    } , (accessToken , refreshToken , profile , done) => {
            console.log("Hitting the profile");
            console.log(profile);
    })
)