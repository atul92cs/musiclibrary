const sequelize=require('sequelize');
const db=require('../configuration/database');
const Band=db.define('bands',{
  Name:{
    type:sequelize.STRING
  },
  Image:{
    type:sequelize.STRING
  }
});
module.exports=Band;
