
const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",authMiddleware, (req, res) =>{
    res.send(`welcome to the profile ${req.user.username}`)
})
module.exports = router;