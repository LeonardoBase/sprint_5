//1. Guardar usuario en el json
//2. Buscar al usuario que se quiere loguear por su email
//3. Buscar a un usuario por su ID
//4. Editar la información
//5. Eliminar a un usuario


const path= require ('path')
const fs= require ('fs')


const userModel = {
    filename: path.join(__dirname, '../database/usersDataBase.json'),

    getData: function(){    //Obtiene los json
  
        return JSON.parse(fs.readFileSync(this.filename, 'utf-8'));
    },

    generateId: function() {  //Genera el ultimo id
        let allUsers= this.findAll()
        let lastUser= allUsers.pop()
        if (lastUser) {

            return lastUser.id + 1
        }
        
        return 1
    },

    findAll: function() {   //obtiene todos los json

        return this.getData()
    },

    findByPk: function (id) {  //busca por id

        let allUsers= this.findAll()
        let userFound= allUsers.find(oneUser => oneUser.id === id)
        return userFound

    },

    findByField: function (field, text) { //busca por cualquier cosa
        let allUsers= this.findAll()
        let userFound= allUsers.find(oneUser => oneUser[field] === text)
        return userFound

    },

    create: function (userData) {       // crea nuevo usuario
        let allUsers= this.findAll()
        let newUser= {
            id: this.generateId(),
            ...userData


        }
        allUsers.push(newUser)
        fs.writeFileSync(this.filename, JSON.stringify(allUsers,null,' '));
        return newUser
    },

    delete: function (id) {  // elimina nuevo usuario
        let allUsers= this.findAll()
        let finalUsers= allUsers.filter(oneUser => oneUser.id !== id)
        fs.writeFileSync(this.filename, JSON.stringify(finalUsers,null,' '));
        return true
    }

}

module.exports= userModel;