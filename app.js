
const express = require("express");
const app = express();
const passportSetup = require("./config/passportSetup");
const db = require("./config/db");
  db();  
const router = require("./routes/authRoute");
app.set('view engine', 'ejs')
app.use("/auth" , router);
app.get("/", (req, res) =>{
    res.render('home')
})

app.listen(5000, ()=> console.log(`listing at the port number 5000 .....`))