const express=require('express');
const router=express.Router();
 const band=require('../models/Bands');
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
 module.exports=router;
