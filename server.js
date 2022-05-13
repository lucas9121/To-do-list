require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
require('./models/connection')
const favicon = require('serve-favicon')
const taskController = require('./controllers/task')


app.use(cors())
app.use(express.json())


// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/tasks', taskController)


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})