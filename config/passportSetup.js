const passport = require("passport");
const keys = require("./keys")

const User = require("../models/userModel")
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// for cookie stuffing
passport.serializeUser((user, done) =>{
    done(null, user.id);
}) 

passport.deserializeUser((id, done) =>{
    User.findById(id).then((user) =>{
        done(null , user)
    }).catch(err => console.log(err))
})


passport.use( new GoogleStrategy({
    // will use google strategy
    callbackURL : "/auth/google/redirect",
    clientID : keys.google.clientID,
    clientSecret: keys.google.clientSecret,
}, (acessToken, refreshToken, profile, done) =>{
    // passport callback functions
    //checking user 
    User.findOne({googleId : profile.id}).then(currentUser =>{
        if(currentUser) {
            done(null, currentUser)
            console.log('user already registred', currentUser)
        }else{
            new User({
                username : profile.displayName,
                googleId : profile.id
            }).save().then((newUser) =>{
                done(null, newUser)
                console.log(newUser)
            }).catch(err => console.log(err))
         
        }
    })
   
}))