const mongoose = require('mongoose')

const BookSchena = new mongoose.Schema({
    
    email:{
        type: String
    },
    author: {
        type: String

    },  
    description  :{
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Book', BookSchena)