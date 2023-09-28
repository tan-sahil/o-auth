# o-auth
by using passport , added googlr authentication and github authemtication 


// for google authentication ...

// created Strategy by "passport-google-auth20" and with help of passport.authenticate// 
// visted to consent screen, got params in redirect route//
// save data in mongo // 
// created sessions and populated cookie to further validate user//
// then during log out , destroyed cookie by req.logout//

->> // added middleware to protect routes by req.user //

