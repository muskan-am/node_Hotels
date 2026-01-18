const express = require('express')
const app = express();
const db = require('./db');
require('dotenv').config();
const passport = require('./auth');

const bodyParser = require('body-parser');
app.use(bodyParser.json());   //req.body
const PORT = process.env.PORT || 3000;


//Middleware Function
const logRequest = (req,res,next) => {
    console.log(`[${new Date().toLocaleString()}] Request Made to : ${req.originalUrl}`);
    next();
}
app.use(logRequest);


app.use(passport.initialize());
const localAuthMiddleware = passport.authenticate('local', {session : false});

app.get('/', function (req, res) {
    res.send('welcome to my hotel..');
})

//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');


//Use the Routers
app.use('/person', personRoutes);
app.use('/menu', menuRoutes);


app.listen(PORT, () => {
    console.log('listening on post 3000');
})

