const fs = require('fs');
const path = require('path');
const Sequelize= require('sequelize')
const Op = Sequelize.Op;


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
        db.products.findAll({
            include: [
                {association:'categories' },
                {association:'materials' }     
                
           ],
            where: {
                name: {[Op.like]: '%' + req.query.search_query + '%' }
            }
        })
        .then ((resultado) => {
            
                res.render ('productslists',{productos:resultado})
            
           
         })
        
    }
}

    module.exports= controller;