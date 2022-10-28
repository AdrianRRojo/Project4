// require packages
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rowdy = require('rowdy-logger')
const authLockedRoute = require('./controllers/api-v1/authLockedRoute')
// config express app
const app = express()
const PORT = process.env.PORT || 3001 
// for debug logging 
const rowdyResults = rowdy.begin(app)
// cross origin resource sharing 
app.use(cors())
// request body parsing
app.use(express.urlencoded({ extended: false })) // optional 
app.use(express.json())

const myMiddleWare = ((req, res, next) => {
  console.log('hello from the middleware')
  next() // tells express, go to the next thing
})

//? if out side of a specific route, middleware is applied to every route
// app.use(myMiddleWare) 



// GET / -- test index route
//? Route specific middlware only will be applied on this route
app.get('/', authLockedRoute, (req, res) => {
  res.json({ msg: 'hello backend 🤖' })
})

// controllers
app.use('/api-v1/users', require('./controllers/api-v1/users.js'))

// hey listen
app.listen(PORT, () => {
  rowdyResults.print()
  console.log(`is that port ${PORT} I hear? 🙉`)
})

