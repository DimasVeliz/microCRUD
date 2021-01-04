const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const UserModel= require('../concreteModels/UserModel')

const UserServices ={
    ...baseCRUD(UserModel),
};


module.exports =  UserServices;