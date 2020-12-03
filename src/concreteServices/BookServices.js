const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const BookModel= require('../concreteModels/BookModel')

const BookServices ={
    ...baseCRUD(BookModel),
};


module.exports =  BookServices;