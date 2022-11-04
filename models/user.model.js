const{Model,DataTypes} = require('sequelize')

const db = require ('../db/db')

class User extends Model { }
 User.init ({
    name : {
        type: DataTypes.TEXT,
        primaryKey:true
    },
    email :{
        type: DataTypes.TEXT
    }
 }, {sequelize:db })

 module.exports = User