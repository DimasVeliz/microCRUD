const mongoose = require('mongoose')

const ProblemSchema = new mongoose.Schema({
    
    displayName:{
        type: String
    },
    category: {
        type: String

    },  
    description  :{
        type: String
    },
    dificulty  :{
        type: String
    },
    solutionExample  :{
        type: Array
    },
    programingLanguageDetails  :{
        type: Array
    },
    videoSolutionUrl:{
        type:String
    },
    hintsArray:{
        type:Array
    }
    
})

module.exports = mongoose.model('Problem', ProblemSchema)