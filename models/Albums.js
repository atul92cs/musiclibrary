const sequelize=require('sequelize');
const db=require('../configuration/database');
const Album=db.define('albums',{
  bandid:{
    type:sequelize.INTEGER
  },
  Name:{
    type:sequelize.STRING
  }
});
module.exports=Album;
