const fs = require('fs');
const path = require('path');


const db = require('../database/models')



const controller = {

    index: (req, res) =>  {
        
         db.products.findAll({

            limit: 12
         })
         .then ((resultado) => {
            res.render ('index', {productos:resultado})
         })

         

    },
    search: (req,res) => {
        
        res.send (req.query.busquedad)
    }
}

    module.exports= controller;