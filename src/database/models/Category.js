function categoryData(sequelize, Datatypes){
    let a= 'categories';
    let b= {
     id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
     name: {type: Datatypes.STRING(50)}
      
   
    }
    let config = {camelcase: false, timestamps: false};
    const categories = sequelize.define(a,b,config)

    categories.associate= function (models) {
      categories.belongsToMany(models.products, {
        as:'products',
        through: 'categories_products',
        foreignKey: 'categories_id',
        otherKey: 'products_id',
        timestamps: false,
   })
     
 }
  
    return categories;
    } 
    
    module.exports= categoryData;
    