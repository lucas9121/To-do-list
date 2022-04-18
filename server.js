require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000
const taskController = require('./controllers/task')


app.use(cors())
app.use(expres.json())
app.use('/tasks', taskController)


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})