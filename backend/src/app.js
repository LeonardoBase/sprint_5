const express = require('express');
const app = express();
const path = require('path');
const methodOverride =  require('method-override');
const session= require ('express-session')
const userLoggedMiddleware= require ('./middlewares/userLoggedMiddleware')
const cookies= require ('cookie-parser')


app.use(express.json());
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }));
app.use (session({secret: 'Secreto',
resave:false,
saveUninitialized: false,
}))


app.use (cookies())
app.use (userLoggedMiddleware);


// Routes//

let mainRouter = require('./routes/mainRoutes')
let productsRouter= require ('./routes/productos.js')
let usersRouter = require ('./routes/users.js')

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/productslists', productsRouter);


app.set('view engine', 'ejs');


 app.set('views', [path.join(__dirname, '/'),
                   path.join(__dirname, '/views'),
                   path.join(__dirname, '/views/products'),
                   path.join(__dirname, '/views/user')]);


 app.use(express.static(path.join(__dirname, '../public')))

app.use ((req,res,next)=> {

    res.status (404).render('404-page')
})

 app.listen(process.env.PORT || 3000, function() {
     console.log("Server running");
 })


module.exports = app;
