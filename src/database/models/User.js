function usersData(sequelize, Datatypes){
    let a= 'users';
    let b= {
      id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      products: {type: Datatypes.DATE},
      name: {type: Datatypes.STRING(50)},
      email: {type: Datatypes.STRING(50)},
      address: {type: Datatypes.FLOAT},
      card: { type: Datatypes.INTEGER},
      password: { type: Datatypes.DATE},
   
    }
    let config = {camelcase: false, timestamps: false};
    const usuarios = sequelize.define(a,b,config)
    return  usuarios;
    } 
    module.exports =  usersData;
    