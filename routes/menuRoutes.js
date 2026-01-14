const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');

//POST method to add a Menu Item
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

router.get('/:taste', async (req, res) =>{
    try{
        //extract the tasteType from the URL params
        const tasteType = req.params.taste;
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

router.put('/:id', async (req,res) => {
    try{
        const menuId = req.params.id; 
        const updatedMenuData = req.body; 

        const response = await MenuItem.findByIdAndUpdate(menuId, updatedMenuData, {
            new : true, //Return the updated document
            runValidators : true, // Run mongoose validation
        })
        
        if(!response){
            return res.status(404).json({error : 'Menu Item not found'});
        }

        console.log('data updated');
        res.status(200).json(response);

    }catch(err){
         console.log(err);
         res.status(500).json({error : 'Internal Server Error'});
    }
})


router.delete('/:id', async (req, res) => {
    try{
        const menuId = req.params.id;
        const response = await MenuItem.findByIdAndDelete(menuId);
        if(!response){
            return res.status(404).json({error : 'Menu item not found'});
        }
        console.log('data delete');
        res.status(200).json({message : 'Menu Deleted Successfully'});
    }catch(err){
        console.log(err);
        res.status(500).json({error : 'Internal Server Error'});
    }
})

//comment added for testing purposes
module.exports = router;