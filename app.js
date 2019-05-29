const express=require('express');
const bodyParser=require('body-parser');
const PORT=process.env.PORT||8080;
const band=require('./routes/bandFunctions');
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/band',band);
app.listen(PORT,()=>{
  console.log('server started');
});
