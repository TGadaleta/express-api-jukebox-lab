import dotenv from 'dotenv'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import methodOverride from 'method-override'
import tracksRouter from './controllers/tracks.js'



dotenv.config()
const app = express();

let PORT = process.env.PORT

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
})

app.use(methodOverride())
app.use(express.json())
app.use(cors())
app.use("/tracks", tracksRouter);

app.get('/', (req, res) => {
    res.json({message: 'Your app is working'})
  })
  
  app.listen(PORT, () => {
    console.log("The express app is ready!");
  });