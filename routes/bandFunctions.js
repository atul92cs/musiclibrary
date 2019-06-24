const Band=require('../models/Bands');
const Album=require('../models/Albums');
const express=require('express');
const router=express.Router();
const cloudinary=require('cloudinary');
const multer=require('multer');
const storage=multer.diskStorage({
  filename:(req,file,callback)=>{
    callback(null,Date.now()+file.originalname);
  }
});

const upload=multer({storage:storage});
cloudinary.config({
  cloud_name:'dkhk4gyey',
  api_key:'459656749761335',
api_secret:'AS_y6ZzH7FAjeoIxF1IjtMFKzQg'
});

router.post('/create',upload.single('image'),async(req,res)=>{
  const Image=await cloudinary.v2.uploader.upload(req.file.path);
  const Name=req.body.name;
  Band.create({
    Name:Name,
    Image:Image.url
  }).then(()=>{
    res.status(200).json({
      message:'Band created'
    });
  }).catch(err=>{
    res.status(405).json({
      message:'Error occured',
      error:err
    });
  });
});
router.post('/createalbum',(req,res)=>{
  const bandid=req.body.bandid;
  const Name=req.body.name;
  Album.create({
    bandid:bandid,
    Name:Name
  }).then(()=>{
    res.status(200).json({
      message:'Album created'
    });
  }).catch((err) => {
    res.status(405).json({
      message:'Error occured',
      error:err
    });
  });
});
router.delete('/deletealbum/:id',(req,res)=>{
  const id=req.params.id;
  Album.destroy({where:{id:id}}).then(result=>{
    if(result===1)
    {
      res.status(200).json({
        message:'Album deleted'
      });
    }
    else {
      res.status(405).json({
           message:'Error occured',
           error:err
      });
    }
  }).catch((err) => {
      res.status(403).json({
        message:'error occured',
        error:err
      });
  });
});
module.exports=router;
