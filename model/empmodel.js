const mongoose=require('mongoose');

var empschema=new mongoose.Schema({
    fullname:{type:String},
    email:{type:String},
    mobile:{type:Number},
    city:{type:String}
});

mongoose.model('employees',empschema);

