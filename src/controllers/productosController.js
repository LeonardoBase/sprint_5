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
                    {association:'materials' }     
                    
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
         db.categories.findAll()
         .then((resultado) => {

          res.render ('createproduct',{categories: resultado})
         })
        

    },
    details:(req, res) =>  {
    
   
     db.products.findByPk(req.params.id, {
          include: [
               { 
                    association: "categories"
                }
                ]
     })
     .then((productFound) =>{

          res.render ('details',{producto: productFound})
          })


         

    },
    editproduct:(req, res) =>  {

          let productsRequest= db.products.findByPk(req.params.id)
          let categoriesRequest= db.categories.findAll()
          
          Promise.all([productsRequest,categoriesRequest])
          .then(([producto, categoria]) => {

               
          res.render ('editproduct',{producto: producto, categories:categoria})

     })
     },
     

    update: (req,res) => {

     let errors= validationResult(req);

     if (errors.isEmpty()) {

          db.products.update ({
               name: req.body.name,
               detail:req.body.detail,
               price:req.body.price,
               stock: req.body.stock
               
          }, {
               where: {
                    id:req.params.id
               }

          }) 
          
       
         
               res.redirect("/productslists"+ '/details/'+req.params.id);
         
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
       category: {name:req.body.category},
       price: req.body.price,
       detail: req.body.detail,
       name: req.body.name,
       stock: req.body.stock,
       image: req.file.filename

    }, {
         include:['categories']
    })
    res.redirect ('/')

}
}

module.exports = productosController;