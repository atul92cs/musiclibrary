const express=require('express');
const router=express.Router();
const sequelize=require('sequelize');
 const band=require('../models/Bands');
 const album=require('../models/Albums');
 router.get('/',(req,res)=>{
   band.findAll({}).then(result=>{
      const bands=result;
      res.render('index',{bands:bands});
   }).catch(err=>{
      res.status(403).json({
        message:'error occured',
        error:err
      });
   });
 });
 router.get('/add',(req,res)=>{
   band.findAll({}).then(result=>{
      const bands=result;
      res.render('addartist',{bands:bands});
   }).catch(err=>{
      res.status(403).json({
        message:'error occured',
        error:err
      });
   });
 });
 router.get('/add/album',(req,res)=>{
   band.findAll({}).then(result=>{
    const  bands=result;
      album.sequelize.query('select albums.id,albums.Name as AlbumName,bands.Name as BandName from albums join bands on albums.bandid=bands.id',{type:album.sequelize.QueryTypes.SELECT}).then(result=>{
      const   albums=result;
         res.render('addalbum',{bands:bands,albums:albums,layout:'layout'});
      }).catch((err) => {
       console.log(err);
     });
   }).catch((err) => {
     console.log(err);
   });



 });
 module.exports=router;
