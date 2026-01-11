const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

router.post('/', async (req, res) => {
    try {
        const data = req.body;

        //Crete new menu fro the MenuItem model
        const newMenu = new MenuItem(data);

        //saved newNenu ko databases me
        const response = await newMenu.save();
        console.log('saved menu data');
        res.status(200).json(response);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})


router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error' });
    }
})

router.get('//:tasteType', async (req, res) =>{
    try{
        //extract the tasteType from the URL params
        const tasteType = req.params.tasteType;
        if(tasteType == 'Sweet' || tasteType == 'Spicy' || tasteType == 'Sour'){
            const response = await MenuItem.find({taste : tasteType});
            console.log('response fetched');
            res.status(200).json(response);
        }else{
            res.status(404).json({error : 'Invalid work type'});
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal server error'});
    }
})

module.exports = router;