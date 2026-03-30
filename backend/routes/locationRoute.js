//for game portion:

import express from 'express';

const router = express.Router();

import Location from '../models/location.js'
// import { authMiddleware } from '../utils/auth.js';

router.post('/', async (req,res) => {

  try{
    const location = await Location.create({
                      ...req.body,
                      author: req.user._id
    })

    res.status(200).json(location)
    console.log('location added', location)
  } catch (error) {

    console.error('Error adding location:', error)
    res.status(500).json({ error: 'Failed to add location' })

  }
});

router.get('/', async (req,res) => {

  try {
    const locations = await Location.find({})
    res.status(200).json(locations)
  } catch (error) {

    console.error('Error fetching locations:', error)
    res.status(500).json({ error: 'Failed to fetch locations' })
  }
});

export default router;