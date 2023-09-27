

const authMiddleware = (req, res, next) =>{
    // check userr is logged in  .. by req.user since it will be created thanks to call and passport session
    if(!req.user){
        res.redirect("/auth/login");
    }else{
        // call next middleware
        next()
    }
}


module.exports = authMiddleware;