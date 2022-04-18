require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const taskController = require('./controllers/task')

app.use(expres.json())
app.use('/tasks', taskController)


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
})