const express = require('express');
const router = express.Router();
const uploadFile= require('./../modules/validImage')
const { body } = require('express-validator');


const productosController = require ('../controllers/productosController')

let validaciones = [
    body('name').notEmpty().withMessage('Campo vacio'),
]

//***  Routes ****/
router.get ('/test', productosController.test);

router.get ('/cart', productosController.cart);

router.get ('/', productosController.productslists);

router.post ('/', productosController.productslists);

router.get ('/api', productosController.productslistsApi);
            

router.get ('/create', productosController.createproduct);

router.post ('/store', uploadFile.single('imageProduct'), productosController.store)

router.get('/details/:id',productosController.details);

router.get ('/:id/editproduct',  productosController.editproduct);

router.put('/:id', validaciones, productosController.update)

router.delete('/:id', productosController.erase)



module.exports = router;
