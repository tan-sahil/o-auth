const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login" , (req, res) =>{
    res.render('login', {user : req.user});
})

//logout process

router.get("/logout" , (req, res) =>{
    req.logOut();
    res.redirect("/");
})

// google authenticate provider.. 
router.get("/google" , passport.authenticate('google', {
    scope: ['profile']
}) )

// redirect to auth/google/redirect

router.get('/google/redirect' , passport.authenticate('google'),(req, res) =>{
    // res.send('this is redirecting to page')
    res.redirect('/profile/');
})

// git routes.. 

router.get('/github', passport.authenticate('github', {
    scope :["profile"]
}))

//redirect handeling
// here passport.authenticate will work differently since it will have params sent by git to it.
router.get('/github/redirect', passport.authenticate('github'), (req, res) =>{
    res.send("redirected by github authentication")
})

module.exports  = router;