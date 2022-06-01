const userModel= require ('../models/Usermodel')
const db= require('../database/models')

function userLoggedMiddleware (req,res,next) {
   
    res.locals.isLogged= false

    let emailInCookie= req.cookies.userEmail
    
    if (emailInCookie) {
        

     db.users.findOne({
        where: {email:emailInCookie}
    }) .then ((userFromCookie)=> {
            
            if (userFromCookie) {

                req.session.userLogged= userFromCookie
                
            } 
             
        })
    }   
            if(req.session.userLogged) {

            res.locals.isLogged= true
            res.locals.userLogged= req.session.userLogged
            }
        
    
    next()
 }

module.exports= userLoggedMiddleware