function categoryData(sequelize, Datatypes){
    let a= 'categories_products';
    let b= {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      products_id: {type: Datatypes.INTEGER},
      categories_id: {type: Datatypes.INTEGER},
      material_id:{type: Datatypes.INTEGER}
    }
    let config = {camelcase: false, timestamps: false};
    const categoriesproducts = sequelize.define(a,b,config)

  
    return categoriesproducts;
    } 
    
    module.exports= categoryData;
    
    