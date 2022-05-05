const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');



const db = require('../database/models')
const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productosController = {

     productslists:(req, res) =>  {

          db.products.findAll({

               include: [
                    {association:'categories' },
               
                    
               ]
          })
          .then((products) =>{
     
               res.render ('productslists',{productos: products})
     
          })

         
         
 
     },
    cart: (req, res) =>  {
         res.render ('cart')

    },
    createproduct:(req, res) =>  {
         res.render ('createproduct')

    },
    details:(req, res) =>  {

     db.products.findByPk(req.params.id)
     .then((productFound) =>{

          res.render ('details',{producto: productFound})
          })
         

    },
    editproduct:(req, res) =>  {

     db.products.findByPk(req.params.id)
     .then((productFound) =>{

          res.render ('editproduct',{producto: productFound})

     })
     },
     

    update: (req,res) => {

     let errors= validationResult(req);

     if (errors.isEmpty()) {
          db.products.update ({
               name: req.body.name,
               detail:req.body.detail,
               price:req.body.price,
               category:req.body.category,
          }, {
               where: {
                    id:req.params.id
               }

          })
          // .then((products) =>{} )

         
               res.redirect("/");
         
     }
     else {
     res.render ('editproduct',{errors: errors.array()})
     }
          

    },

    erase:(req, res) =>  {
     let imagedb= db.products.image
         
        
     db.products.destroy({
          where: {
               id: req.params.id,
               
          }

     })
     // if(imagedb==null) {

     //      fs.unlinkSync(path.join(__dirname, '../../public/images/products/', imagedb));
     // }
    
     
          res.redirect("/");
},


    store: (req, res) => {
			
    db.products.create({
     id: req.body.id,
       category: req.body.category,
       price: req.body.price,
       detail: req.body.detail,
       name: req.body.name,
       image: req.file.name

    })
    res.redirect ('/')

}
}

module.exports = productosController;