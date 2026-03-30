import mongoose from 'mongoose';

async function connectDB() {
  try {

      await mongoose.connect(process.env.MONGO_URI)
      console.log("MongoDB Connected!" , mongoose.connection.name)

  } catch(err) {

    console.log(err)
    
  }
}

connectDB()