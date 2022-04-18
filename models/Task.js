const { Schema, model } = require('./connection')

const taskSchema = Schema({
    title: {
        require: true,
        type: String
    },
    status: {
        type: Boolean,
        default: false,
    }
},
)

module.exports = model('Task', taskSchema)