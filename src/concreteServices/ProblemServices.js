const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const ProblemModel= require('../concreteModels/ProblemModel')

const BookServices ={
    ...baseCRUD(ProblemModel),
};


module.exports =  BookServices;