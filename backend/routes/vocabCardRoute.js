import express from 'express';

const router = express.Router();

// import item from '../models/items.js'
import User from '../models/user.js';

// updates unlocked vocab as user progresses
router.post('/', async (req,res) =>{
  try{

    const { userId, itemId } = req.body;

    const user = await User.findById(userId);

    user.vocab.push({ item: itemId })

    await user.save()
    
    console.log("success!", itemId)
    return res.json(user);

  } catch(err) {

    console.log(err.message, "vocab no added")
    return res.status(500).json({ message: "failed to add vocab"})

  }
});

//test rout /vocab/test
router.post('/test', async (req,res) =>{

  console.log("test route hit")
  try{

    const { userId, itemId } = req.body;

    const user = await User.findById(userId);

    user.vocab.push({ item: itemId })

    await user.save()
    
    console.log("success!", itemId)
    return res.json(user);

  } catch(err) {

    console.log(err.message, "vocab no added")
    return res.status(500).json({ message: "failed to add vocab"})

  }
});

// gets all vocab

export default router