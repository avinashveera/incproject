const mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/employee',{ useNewUrlParser : true },(err)=>{
    if(!err){console.log('mongodb successfully connected')}
    else
    {
        console.log(err)
    }
})