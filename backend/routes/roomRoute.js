import express from 'express';

const router = express.Router();

import Room from '../models/room.js'
// import { authMiddleware } from '../utils/auth.js';

// add room (later when adding admin?)

// router.post('/', async (req,res) => {

//    try{
//       const room = await Room.create({
//                         ...req.body,
//                         author: req.user._id
//       })
  
//       console.log('room added', room)
//       res.status(200).json(room)

//     } catch (err) {
  
//       console.error('Error adding room:', err.message)
//       res.status(500).json({ 'Failed to add location'})
  
//     }

// });

//show target room - need to change to controlled output

router.get('/:id', async (req,res) => {

   try{

      console.log("Going to room...:", req.params.id)

      const rooms = await Room.findById(req.params.id) 
      res.status(200).json(rooms)
      
      console.log("In room:", Room)

    } catch(err) {

      console.log('Error fetching room:', err.message)
      res.status(500).json({ message: 'Failed to fetch rooms' })  

    }

});

export default router

//should I seed data? https://www.freecodecamp.org/news/how-to-build-database-seed-scripts-for-your-node-application/