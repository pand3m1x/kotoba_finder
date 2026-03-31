import express from 'express';

const router = express.Router();

// import item from '../models/items.js'
import User from '../models/user.js';

// updates unlocked vocab as user progresses
router.post('/vocab', async (req,res) =>{
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

