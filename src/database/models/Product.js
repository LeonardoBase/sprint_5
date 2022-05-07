function productsData(sequelize, Datatypes){
    let a= 'products';
    let b= {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: {type: Datatypes.STRING(50)},
      price: {type: Datatypes.INTEGER},
      detail: {type: Datatypes.STRING(50)},
       image: {type: Datatypes.STRING(50)},
       stock: {type: Datatypes.INTEGER},
       status: {type: Datatypes.INTEGER}
      
   
    }
    let config = {camelcase: false, timestamps: false};
    const productos = sequelize.define(a,b,config)

    productos.associate= function (models) {

     productos.belongsToMany(models.material_products, {
          as:'materials',
          through: 'categories_products',
          foreignKey: 'products_id',
          otherKey: 'material_id',
          timestamps: false,
     })

         productos.belongsToMany(models.categories, {
              as:'categories',
              through: 'categories_products',
              foreignKey: 'products_id',
              otherKey: 'categories_id',
              timestamps: false,
         })

       
    }
    
    return productos;
    } 
    
    module.exports= productsData;
    