const passport = require("passport");
const keys = require("./keys")
const GoogleStrategy = require("passport-google-oauth20")
const users = require("../Models/models")

passport.serializeUser((user , done) => {
    done(null , user.id)
}) 

passport.deserializeUser((id , done) => {
    users.findOne(id)
        .then(res => {
            done(null , res.id)
        })
})

passport.use(
    new GoogleStrategy({
        callbackURL: "/auth/google/redirect",
        clientID : keys.google.clientID,
        clientSecret : keys.google.clientSecret
    } , (accessToken , refreshToken , profile , done) => {
            console.log("Hitting the profile");
            users.findOne({ gid : profile.id})
                .then(res => {
                    if(res){
                        console.log("User Already Exist");
                        done(null , res)
                    }
                    else{
                        users({
                            gid : profile.id,
                            name: profile.displayName
                        })
                        .save()
                        .then(resData => {
                            console.log("Data saved")
                            done(null , resData)
                        })
                        .catch(err => console.log(err))
                    }
                })
                .catch(err => {
                    console.log("OPPS! " + err)
                })
    })
)