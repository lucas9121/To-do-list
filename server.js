require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
// const favicon = require('serve-favicon');
const PORT = process.env.PORT || 3001
const taskController = require('./controllers/task')


app.use(cors())
app.use(express.json())
app.use('/tasks', taskController)

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
// app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})