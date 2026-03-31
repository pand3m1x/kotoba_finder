import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
  },
  vocab: [{
    item:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item'
  },
    learnedAt: {
    type: Date,
    default: Date.now
    }
  }],
  currentRoom: {
    type: number,
    default: 1
  }
});

const User = mongoose.model('User', userSchema);
export default User;