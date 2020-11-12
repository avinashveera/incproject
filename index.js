 const express=require('express');
 const db=require('./model/db');
 const control=require('./controler/controler');
 const exphbs=require('express-handler');
 const app=express();
 const path=require('path');
 const hbs=require('hbs');
             
 app.listen(5900,()=>{console.log('port is running on 5000')});

 const header=`<h1>this is header in all page</h1>`

 const viewsPath=path.join(__dirname,'/views/layouts/');

 app.set('view engine', 'hbs');
 app.set('views', viewsPath);

app.use('/',control)

     app.get('/about',(req,res)=>{

    res.render('about',{veera:header})
 });

 app.use('/employee',control)


