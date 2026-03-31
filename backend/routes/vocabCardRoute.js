import express from 'express';

const router = express.Router();

// import item from '../models/items.js'
import User from '../models/user.js';
// import { authMiddleware } from '../utils/auth.js'

// router.use(authMiddleware)
// // updates unlocked vocab as user progresses , this is for full version with use auth
// router.post('/', async (req,res) =>{

//   console.log("Adding vocab to user");
//   try{

//     console.log(req.user)
//     const { _id } = req.user; // coming in from auth middlerware
//     const { itemId } = req.body; // coming from postman req
    
//     const user = await User.findById(_id);
//     // console.log(user,userId)

//     user.vocab.push({ item: itemId })

//     await user.save()
    
//     console.log("success!", itemId)
//     return res.json(user);

//   } catch(err) {

//     console.log(err.message, "vocab no added")
//     return res.status(500).json({ message: "failed to add vocab"})

//   }
// });

// test rout /vocab/test
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

// // gets all vocab for user
// router.get('/:id', async (req,res) => {

//   try{

//     const user = await User.findById(req.user._id)
//                            .populate('vocab.item');

//     console.log("Grabbing user's learned vocab")
//     return res.json(user.vocab)

//   } catch(err) {

//     console.log(err.message, "vocab not found")
//     return res.status(500).json({ message: "failed to find vocab"})

//   }
// });

// // test route for getting by user words //accidently added room data, but something to think about for vocab card
router.get('/test/:id', async (req,res) => {

  try{
    const user = await User.findById(req.params.id)
                           .populate('vocab.item');

    console.log("Grabbing user's learned vocab")
    return res.json(user.vocab)

  } catch(err) {

    console.log(err.message, "vocab not found")
    return res.status(500).json({ message: "failed to find vocab"})

  }
});

export default router