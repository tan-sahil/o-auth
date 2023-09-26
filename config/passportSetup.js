const passport = require("passport");
const keys = require("./keys")
const GoogleStrategy = require("passport-google-oauth20");

passport.use( new GoogleStrategy({
    // will use google strategy
    callbackURL : "/auth/google/redirect",
    clientID : keys.google.clientId,
    clientSecret: keys.google.clientSecret
}, () =>{
    // passport callback functions

}))