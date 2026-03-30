import express from 'express';

const router = express.Router();

import Item from '../models/items.js'

router.get('/:id/items', async (req,res) => {

   try{
      console.log("Looking for items:", req.params.id )

      const items = await Item.find({ room: req.params.id }) 
      
      console.log("We have items!", items)
      return res.status(200).json(items)

    } catch(err) {

      console.log('Error fetching items:', err.message)
      return res.status(500).json({ message: 'Failed to fetch items' })  
    }

});

export default router