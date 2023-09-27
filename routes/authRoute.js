const express = require("express");
const router = express.Router();
const passport = require("passport");

router.get("/login" , (req, res) =>{
    res.render('login');
})

//logout process

router.get("/logout" , (req, res) =>{
    res.send("logging out of the system")
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
module.exports  = router;