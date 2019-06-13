const express=require('express');
const bodyParser=require('body-parser');
const PORT=process.env.PORT||8080;
const path=require('path');
const routes=require('./routes');
const exphbs=require('express-handlebars');
const band=require('./routes/bandFunctions');
const app=express();
//app.set('views',path.join(__dirname:'views'));
app.engine('handlebars',exphbs({defaultlayout:'main'}));
app.set('view engine','handlebars');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/band',band);
app.use('/',routes);
app.listen(PORT,()=>{
  console.log('server started');
});
