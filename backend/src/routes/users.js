const express = require('express');
const router = express.Router();
const {body } = require('express-validator');
const guestMiddleware= require ('../middlewares/guestMiddleware.js')
const authMiddleware= require ('../middlewares/authMiddleware.js')
const uploadFileusers= require('./../modules/validImageUsers.js')
const cors= require('cors')

const userController = require ('../controllers/usersController.js');
router.use(cors())

let validacioneslogin = [

    body('email').isEmail().withMessage('Email invalido'),
    body ('password').isLength ({min: 8}).withMessage('La contraseña debe tener mínimo 8 caracteres')
]

let validacionesregistro= [

    body('user').notEmpty().withMessage('Campo vacio'),
    body('email').isEmail().withMessage('Email invalido'),
    body ('password').isLength ({min: 4, max:16}).withMessage('La contraseña debe tener mínimo 8 caracteres')
    // check('confirmPassword').matches('password').withMessage('La contraseña debe coincidir')
]


router.get ('/profile', authMiddleware, userController.profile)

router.get ('/login', userController.login)

router.get ('/logout', userController.logout)

router.get ('/register',  guestMiddleware, userController.register)

router.post ('/login', uploadFileusers.single('imageLogin'), validacioneslogin, userController.processLogin)

router.post ('/register', uploadFileusers.single('imageRegister'), validacionesregistro, userController.store)

//APIS//
router.get ('/api', userController.usersApi)
router.get ('/api/:id', userController.usersbypkApi)


module.exports = router;