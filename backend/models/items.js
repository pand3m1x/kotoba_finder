import mongoose from 'mongoose'

const itemSchema = new mongoose.Schema({

  item_eng: {
    type: String,
    required: true
  },
  item_jp:{
    type: String,
    required: false
  },
  item_image:{
    type: String,
    required: true
  },
  description_eng: {
    type: String,
    required: false
  },
  description_jp: {
    type: String,
    required: false
  }
  // room: {
  //   type: mongoose.Types.ObjectId,
  //   ref: 'Room',
  //   required: true
  // }

})

const Item = mongoose.model('Item', itemSchema)
export default Item