const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const UserModel= require('../concreteModels/UserModel')

const BookServices ={
    ...baseCRUD(UserModel),
};


module.exports =  BookServices;