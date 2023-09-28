
const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");

router.get("/",authMiddleware, (req, res) =>{
    res.render('profile', {user : req.user})
})
module.exports = router;