const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    
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

module.exports = mongoose.model('User', UserSchema)