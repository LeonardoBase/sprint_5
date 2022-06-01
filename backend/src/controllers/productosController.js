const fs = require('fs');
const path = require('path');



const db = require('../database/models')


const productosController = {

     test: (req,res) => {

          res.render('test')
     },
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
     let materialsRequest= db.materials.findAll()
     let categoriesRequest= db.categories.findAll()
     let intermediate= db.categories_products.findOne({where: {products_id: req.params.id}})
     let c2Request= db.products.findByPk(req.params.id)
     
     Promise.all([productsRequest,materialsRequest,categoriesRequest,intermediate, c2Request])
     .then(([products,materiales, categoria, intermediate, categoriaxPk]) => {


     res.render ('editproduct',{materials: materiales, categories:categoria, producto:products, 
                                                 intermediate:intermediate, categoriaxPk:categoriaxPk })
                    
     })
     },

    update: (req,res) => {

          
     console.log(req.body);
               
          
          async function updateAsync() {
               
          const item = await db.products.update({
               
               name: req.body.name,
               price: req.body.price,
               detail: req.body.description,
               stock: req.body.stock,
               status: 1,
               
          },{ where: { id:req.params.id}})      
           
          await db.categories_products.update ({
         
               
               categories_id: req.body.category,
               material_id: req.body.materials
           
          },{ where: { products_id: item.id}})   
     }

        res.redirect("/productslists"+ '/details/'+req.params.id);
      

    },

    erase:(req, res) =>  {
     // let imagedb= db.products.image
         
        
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

createproduct:(req, res) =>  {
    
     let materialsRequest= db.materials.findAll()
     let categoriesRequest= db.categories.findAll()
     
     Promise.all([materialsRequest,categoriesRequest])
     .then(([materiales, categoria]) => {

          
     res.render ('createproduct',{materials: materiales, categories:categoria})
     

})


 
},
    store: async(req, res) => {
          
          let producte= await db.products.create ({
         
               name: req.body.name,
               price: req.body.price,
               detail: req.body.detail,
               image: req.file.filename,
               stock: req.body.stock,
               status: 1,
               
           
     }) 
         await db.categories_products.create ({
         
          products_id: producte.id,
          categories_id: req.body.category,
          material_id: req.body.materials
      
     }) 

          res.redirect('/');
     
     }
}
module.exports = productosController;