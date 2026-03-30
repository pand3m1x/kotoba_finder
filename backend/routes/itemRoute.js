import express from 'express';

const router = express.Router();

import Item from '../models/items.js'

router.get('/:id/items', async (req,res) => {

   try{

      const items = await Item.find({}) 
      res.status(200).json(items)

      console.log(items)

    } catch(err) {

      console.log('Error fetching items:', err.message)
      res.status(500).json({ message: 'Failed to fetch items' })  
    }

});

export default router