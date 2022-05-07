const { validationResult } = require('express-validator');
const fs= require('fs')
const bcrypt= require('bcrypt')
const path= require('path')

const userModel= require('../models/Usermodel')
const productsFilePath = path.join(__dirname, '../database/usersDataBase.json');
const usersJSON = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));



   
let userController = {

  
    login: (req, res) =>  {

        res.render ('login')
    
    },
    profile: (req, res) =>  {
        
    
        res.render ('profile', {user: req.session.userLogged})
    
    },
    // Proceso de registro
    store: (req, res) => { 
		let errors= validationResult(req)
        
        if (errors.isEmpty()){

            let userinDB= userModel.findByField('email',req.body.email)
            if (userinDB) {
                return res.render ('register', {errors:[
                    {
                        msg:"Este email ya está registrado"
                    }],
                    old: req.body
                })
                    
            } else {

            let userToCreate= {
                ...req.body,
                password: bcrypt.hashSync(req.body.password, 10),
                confirmPassword: bcrypt.hashSync(req.body.password, 10),
                image: req.file.filename

            }
             let userCreated= userModel.create (userToCreate)
             return res.redirect ('/users/login')
            
            }
                       
        } else {

            
               res.render ('register',{errors:errors.array(),
                old: req.body
              
            })
        }   

	 },

    register: (req, res) =>  {
        
        res.render ('register')
    },
    processLogin: (req, res) => {
        let errors = validationResult (req);
       

        if (errors.isEmpty()) {
          
            let usertoLogin= userModel.findByField('email', req.body.email)
            
            if (usertoLogin) {
                let passwordCryped= bcrypt.compareSync(req.body.password, usertoLogin.password)
                if (passwordCryped) {
                        delete usertoLogin.password
                        delete usertoLogin.confirmPassword
                        req.session.userLogged= usertoLogin

                    if (req.body.remember_user) {

                        res.cookie('userEmail', req.body.email, {maxAge: (1000*60)*2})
                    }                        
                        return res.redirect ('/users/profile')
                }

                return res.render ('login', {errors:[
                    {
                        msg:"Las credenciales son inválidas"
                    }],
                    old: req.body
                })
    
    
             }
           

            return res.render ('login', {errors:[
                {
                    msg:"No se encuentra este email en nuestra base de datos"
                }],
                old: req.body
            })


         }  else {
             return res.render ('login', {errors: errors.errors })
            
         }     
    },


    logout: (req,res) => {
        res.clearCookie ('userEmail')
        req.session.destroy()
        return res.redirect('/')
    }
    }



module.exports = userController;
    