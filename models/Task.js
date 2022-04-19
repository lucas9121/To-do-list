const { Schema, model } = require('./connection')

const taskSchema = new Schema({
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