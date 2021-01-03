const BookService = require('../concreteServices/BookServices')
const {baseCRUDService} = require('../genericCRUDService/genericCRUDServiceBase')

const UserController ={
    ...baseCRUDService(BookService),
}


module.exports =  UserController;