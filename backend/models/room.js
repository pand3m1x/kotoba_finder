import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({

  room_name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: false
  },
  items: {
    type: [{ 
      type: String
    }],
    required: true
  },
  order: {
    type: Number,
    required: true
  }
   //   location: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'Location',
  //   required: true
  // }
});

const Room = mongoose.model('Room', roomSchema)
export default Room