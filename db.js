const mongoose = require('mongoose');
require('dotenv').config();

//Define the mongoose connection URL
//const mongoURL = process.env.MONGODB_URL_LOCAL     //Replace 'hotels' with your database name
const mongoURL = process.env.MONGODB_URL;

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