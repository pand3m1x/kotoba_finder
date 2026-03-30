import mongoose from 'mongoose'

const locationSchema = new mongoose.Schema({

  locationType: {
    type: String,
    required: true,
  },
  character: {
    type: String,
    required: true
  },
  characterImage: {
    type: String,
    required: true
  },
  description: {
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