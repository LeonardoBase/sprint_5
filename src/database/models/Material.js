function materialData(sequelize, Datatypes){
    let a= 'materials';
    let b= {
      id: {type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      name: {type: Datatypes.STRING(50)}
      
   
    }
    let config = {camelcase: false, timestamps: false};
    const materials = sequelize.define(a,b,config)

    materials.associate= function (models) {
        materials.belongsToMany(models.products, {
        as:'product',
        through: 'categories_products',
        foreignKey: 'material_id',
        otherKey: 'products_id',
        timestamps: false,
   })
     
 }
  
    return materials;
    } 
    
    module.exports= materialData;
    