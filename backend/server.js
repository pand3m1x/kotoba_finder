import 'dotenv/config'
import './config/connect.js'
import express from 'express'
import userRoutes from './routes/userRoute.js'
// import postRoutes from './routes/postRoute.js'

const app = express()
import cors from 'cors'

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors()) //['http://localhost:5173'] < This is for anything that communicates with the backend, telling it, 'it's okay' 

// app.use('/api/posts', postRoutes)
// app.use('/api/posts', postRoutes)
app.use('/api/users', userRoutes)

app.get('/', (req,res) => {
  res.send('hello world!')
})

app.listen(port,() => console.log(`Mic Check, Mic Check: http://localhost:${port}`))