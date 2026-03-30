import express from 'express';

const router = express.Router();

import Room from '../models/room.js'
// import { authMiddleware } from '../utils/auth.js';

// add room

router.post('/', async (req,res) => {

   try{
      const room = await Room.create({
                        ...req.body,
                        author: req.user._id
      })
  
      console.log('room added', room)
      res.status(200).json(room)

    } catch (err) {
  
      console.error('Error adding room:', err.message)
      res.status(500).json({ 'Failed to add location'})
  
    }

});

export default router