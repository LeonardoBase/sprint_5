const { validationResult } = require("express-validator");
const fs = require("fs");
const bcrypt = require("bcrypt");

const db = require("../database/models");

let userController = {
  register: (req, res) => {
    res.render("register");
  },
  // Proceso de registro
  store: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.users
        .findOne({
          where: { email: req.body.email },
        })
        .then((emailuser) => {
          if (emailuser != null) {
            return res.render("register", {
              errors: [
                {
                  msg: "Este email ya está registrado",
                },
              ],
              old: req.body,
            });
          } else {
            db.users.create({
              username: req.body.user,
              name: req.body.nombre,
              password: bcrypt.hashSync(req.body.password, 10),
              address: req.body.address,
              email: req.body.email,
              image: req.file.filename,
            });

            return res.redirect("/users/login");
          }
        });
    } else {
      res.render("register", { errors: errors.array(), old: req.body });
    }
  },
  login: (req, res) => {
    res.render("login");
  },

  processLogin: (req, res) => {
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      db.users
        .findOne({
          where: { email: req.body.email },
        })
        .then((usertoLogin) => {
          if (usertoLogin != null) {
            let passwordCryped = bcrypt.compareSync(
              req.body.password,
              usertoLogin.password
            );
            if (passwordCryped) {
              delete usertoLogin.password;
              delete usertoLogin.confirmPassword;
              req.session.userLogged = usertoLogin;
              
            
              if (req.body.remember_user) {
                res.cookie("userEmail", req.body.email, {
                  maxAge: 1000 * 60 * 2000,
                });
              
              }
              
               res.redirect("/users/profile") 
  
            }

            return res.render("login", {
              errors: [
                {
                  msg: "Las credenciales son inválidas",
                },
              ],
              old: req.body,
            });
          }

          return res.render("login", {
            errors: [
              {
                msg: "No se encuentra este email en nuestra base de datos",
              },
            ],
            old: req.body,
          });
        });
     
        
    } else {
      return res.render("login", { errors: errors.errors });
    }
  },
  profile: (req, res) => {
    res.render("profile", { user: req.session.userLogged });
  },

  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    return res.redirect("/");
  },
  usersApi: (req, res) => {
    db.users.findAll( {
      attributes: {exclude: ['password','address']}        
  }).then((users) => {
      res.json({
        count: users.length,
        users: users,
      });
    });
  },
  usersbypkApi: (req, res) => {
    db.users.findByPk(req.params.id, {
        attributes: {exclude: ['password','address']}        
    })
        .then((userFound) => {
   
        res.json({ 

            user: userFound
       
        });
    });
  },
  lastUsersApi: (req, res) => {
db.users.findAll()
.then((resultado)=>{
const alabado = resultado.pop()
  res.json({users:alabado})
})
  },
  eraseUser: (req, res) =>{
 
     db.users.destroy({
      where: {
      id: req.params.id
        }
     })    
  },
  editUser:(req, res)=> {
db.users.update({
  
  nombre: req.body.nombre,
  password: req.body.password,
  email: req.body.email,
  address: req.body.address,
  image: req.file.filename,
  },
  { where: { id: req.params.id } 

})
  }

};


module.exports = userController;
