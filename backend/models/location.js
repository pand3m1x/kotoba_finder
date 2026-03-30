import mongoose from 'mongoose'

const locationSchema = new mongoose.Schema({

  location_type_eng: {
    type: String,
    required: true
  },
    location_type_jp: {
    type: String,
    required: false
  },
  character: {
    type: String,
    required: true
  },
  character_image: {
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
  },
  order: {
    type: Number,
    required: true
  }
  
})

const Location = mongoose.model('Location', locationSchema)
export default Location