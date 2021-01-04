const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const ProblemModel= require('../concreteModels/ProblemModel')

const ProblemServices ={
    ...baseCRUD(ProblemModel),
};


module.exports =  ProblemServices;