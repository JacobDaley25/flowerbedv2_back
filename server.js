const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')
const saltRounds = 10
const dotenv = require('dotenv')
const db = mongoose.connection
const PORT = process.env.MONGODBURI || 3000
const mongoURI = String(process.env.MONGODBURI)
const postController = require('./controllers/postController.js')
const sessionsController = require('./controllers/sessions_controller.js')
const userController = require('./controllers/user_controller.js')
//MIDDLEWARE
app.use(express.json())
app.use('/posts', postController)
app.use('/users', userController)
app.use('/auth', sessionController)
app.use(cors())
app.use

//ROUTES
app.listen(PORT, () => {
  console.log('listening...');
})

mongoose.connect(mongoURI)
mongoose.connection.once('open', ()=> {
  console.log('connected to mongod');
})
