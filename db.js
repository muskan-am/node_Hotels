const mongoose = require('mongoose');

//Define the mongoose connection URL
const mongoURL = 'mongodb://localhost:27017/hotels' //Replace 'hotels' with your database name


//Set up  mongodb connections
mongoose.connect(mongoURL)

//Get the default connection
//mongoose maintain a default connection object representing the mongodb connections
const db = mongoose.connection;

//Define event listener for databases connection

db.on('connected',()=>{
    console.log('connected to the mongodb server');
});

db.on('error',(err)=>{
    console.log('mongodb connection error',err);
});

db.on('disconnected', ()=>{
    console.log('Mongodb disconnected');
});

//Export the database connection
module.exports = db;