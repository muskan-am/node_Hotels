const express = require('express')
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());   //req.body



app.get('/', function (req, res) {
    res.send('welcome to my hotel.. how can i help you?')
})



//Import the router files
const personRoutes = require('./routes/personRoutes');
const menuRoutes = require('./routes/menuRoutes');


 //Use the Routers
app.use('/person', personRoutes);
app.use('/MenuItem', menuRoutes);





app.listen(3000, () => {
    console.log('listening on post 3000');
})

