const fs = require('fs');
const path = require('path');
const { validationResult } = require('express-validator');




const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const productosController = {

     productslists:(req, res) =>  {
          const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
          res.render ('productslists',{productos:products})
 
     },
    cart: (req, res) =>  {
         res.render ('cart')

    },
    createproduct:(req, res) =>  {
         res.render ('createproduct')

    },
    details:(req, res) =>  {
         let idProductsel = req.params.id
        
         for (let p of products) {

          if (p.id==idProductsel){
               productFound=p
               break
          }
         }
         res.render ('details',{producto: productFound})

    },
    editproduct:(req, res) =>  {

    
     let idProductsel = req.params.id
        
     for (let p of products) {

      if (p.id==idProductsel){
           productFound=p
           break
      }
     }
     res.render ('editproduct',{producto: productFound})
     },
     

    update: (req,res) => {

     let errors= validationResult(req);

     if (errors.isEmpty()) {

          idNuevo=0;

		for (let s of products){
			if (idNuevo<s.id){
				idNuevo=s.id;
			}

          }

          idNuevo++;

     let productoEditado=req.body;

     let idBuscado = req.params.id;

     let producto = products;

     for (let p of producto){
          if (p.id==idBuscado){
               p.name=productoEditado.name;
               p.price=productoEditado.price;
               p.discount=productoEditado.discount;
               p.category=productoEditado.category;
               p.description=productoEditado.description;
               break;
          }
     }

     fs.writeFileSync(productsFilePath, JSON.stringify(producto,null,' '));
    
     res.redirect("/");
     }
     else {
     res.render ('editproduct',{errors: errors.array()})
     }
          

    },

    erase:(req, res) =>  {
     let idProductoSeleccionado = req.params.id;
		let productoEncontrado=null;

		for (let p of products){
			if (p.id==idProductoSeleccionado){
				productoEncontrado=p;
				break;
			}
		}

		let productos2 = products.filter(function(e){
			return e.id!=productoEncontrado.id;
		})

          fs.unlinkSync(path.join(__dirname, '../../public/images/products/', productoEncontrado.image));
		fs.writeFileSync(productsFilePath, JSON.stringify(productos2,null,' '));

		res.redirect("/");
     },


    store: (req, res) => {
			
     let productos = products;
                                   
		let idNuevo = productos[productos.length-1].id + 1;
          
      let nombreImagen= req.file.filename;

     let nuevoProducto = {
          id: idNuevo,
          name: req.body.name,
          price: req.body.price,
          discount: req.body.discount,
          category: req.body.category,
          description: req.body.description,
          image: nombreImagen
     };

     productos.push(nuevoProducto);


     fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,' '));

     res.redirect('/');

     }

}

module.exports = productosController;