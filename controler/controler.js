const express=require('express');
var router=express.Router();


router.get('/',(req,res)=>{

    res.render("employee/addedit",{viewTitle:'insert Employee'})


});

router.post('/employee',(req,res)=>{ 



});

module.exports=router;