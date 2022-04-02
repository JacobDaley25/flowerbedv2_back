const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const bcrypt = require('bcrypt')
const saltRounds = 10
const dotenv = require('dotenv')
require('dotenv').config()
const db = mongoose.connection
const PORT = process.env.PORT || 3000
const mongoURI = String(process.env.MONGODBURI)
const strainController = require('./controllers/strain_controller.js')
const postController = require('./controllers/postController.js')
const sessionsController = require('./controllers/sessions_controller.js')
const corsOptions = require('./config/corsOptions.js')
const userController = require('./controllers/user_controller.js')
//MIDDLEWARE
app.use(cors(corsOptions))
app.use(express.json())
app.use('/posts', postController)
app.use('/users', userController)
app.use('/auth', sessionsController)
app.use('/strains', strainController)



//ROUTES
app.listen(PORT, () => {
  console.log('listening...');
})

mongoose.connect(mongoURI)
mongoose.connection.once('open', ()=> {
  console.log('connected to mongod');
})
