
const express = require("express");
const app = express();
const passportSetup = require("./config/passportSetup");
const dotenv = require("dotenv").config();
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys")
const db = require("./config/db");
  
const authRouter = require("./routes/authRoute");
const profileRouter = require("./routes/profileRoute");
db(); 
app.set('view engine', 'ejs')
// setting cookiesession 

app.use(cookieSession({
  maxAge : 24 * 60 * 60 * 1000,
  keys: [keys.cookie.sessionKey]
}))

// passport initilize

app.use(passport.initialize());
app.use(passport.session());
app.use("/auth" , authRouter);
app.use("/profile", profileRouter);
app.get("/", (req, res) =>{
    res.render('home')
})

app.listen(5000, ()=> console.log(`listing at the port number 5000 .....`))