const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    
    content:{
        type: String
    },
    author: {
        type: String

    },    
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Article', ArticleSchema)