const BookService = require('../concreteServices/BookServices')
const {baseCRUDService} = require('../genericCRUDService/genericCRUDServiceBase')

const BookController ={
    ...baseCRUDService(BookService),
}


module.exports =  BookController;