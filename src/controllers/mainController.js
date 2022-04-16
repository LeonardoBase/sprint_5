const fs = require('fs');
const path = require('path');



const productsFilePath = path.join(__dirname, '../database/productsDataBase.json');


const controller = {

    index: (req, res) =>  {
        
          const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

         res.render ('index', {productos:products})

    },
    search: (req,res) => {
        
        res.send (req.query.busquedad)
    }
}

    module.exports= controller;