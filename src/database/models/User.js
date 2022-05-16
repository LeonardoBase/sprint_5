function usersData(sequelize, Datatypes){
    let a= 'users';
    let b= {
      id: { type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
      username: {type: Datatypes.STRING(50)},
      name: {type: Datatypes.STRING(50)},
      password: {type: Datatypes.STRING(50)},
      address: {type: Datatypes.STRING(50)},
      email: { type: Datatypes.STRING(50)},
      address: { type: Datatypes.STRING(50)},
      image: { type: Datatypes.STRING(50)},
   
    }
    let config = {camelcase: false, timestamps: false};
    const usuarios = sequelize.define(a,b,config)
    return  usuarios;
    } 
    module.exports =  usersData;
    