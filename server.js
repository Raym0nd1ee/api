const express = require('express'),
 app = express()

const bodyParser = require('body-parser')
const db = require('./db'),
 userRoutes = require('./controllers/user.controller')

// middleware
app.use(bodyParser.json())     
app.use('/api/users', userRoutes)  

db.query('SELECT 1')
    .then(() => {
        console.log('Connection DB success')
        app.listen(3000, console.log('Server started at 3000')
        )
    })
  .catch(err=>console.log('error in connection. \n'.err))
