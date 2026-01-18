const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

//Define the person schema
const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    work : {
        type : String,
        enum : ['chef','manager','waiter'],
        required : true
    },
    mobile : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    address : {
        type : String,
    },
    salary : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});


personSchema.pre('save', async function(){
    const person = this; //this represent ham har record ke liye jab bhi save operation perform karna hoga tho 
    //tho usse pahele premiddle ware ko call hoga aur sara data person me storge kar rahe hoge


    // password change nahi hua to kuch mat karo
    if(!person.isModified('password')) return;

    try{
        // salt generate
       const salt = await bcrypt.genSalt(10);

       //hash password
       const hashedPassword = await bcrypt.hash(person.password, salt);

       //Override the plan password with the hashed one
       person.password = hashedPassword;
    }catch(err){
        return err;
    }
})


personSchema.methods.comparePassword = async function(candidatePassword){
    try{
        //Use bcrypt to compare the provided password with the hashed password
        const isMatch = await bcrypt.compare(candidatePassword, this.password);
        return isMatch;
    }catch(err){
        throw err;
    }
}





//Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;