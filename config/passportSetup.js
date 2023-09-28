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


//github strategy


const GitHubStrategy = require("passport-github2").Strategy;

passport.use(new GitHubStrategy ({
    callbackURL : "/auth/github/redirect",
    clientID : keys.git.clientID,
    clientSecret : keys.git.clientSecret
}, (acessToken, refreshToken, profile, done) =>{
    // call back function
    //checking is user already registered
     User.findOne({gitId : profile.id}).then((currentUser) =>{
        if(currentUser){
            done(null, currentUser)
            console.log("already registerd ", currentUser)
         }else{
             new User({
                username : profile.username,
                gitId : profile.id,
                profileUrl: profile.profileUrl,
                photos : profile.photos[0].value
            }).save().then((newUser) => {
                done(null, newUser)
                console.log(newUser)}).catch(err => console.log(err))
            
        }
    })
   
}))