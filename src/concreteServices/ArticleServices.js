const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const ArticleModel= require('../concreteModels/ArticleModel')

const ArticleService ={
    ...baseCRUD(ArticleModel),
};


module.exports =  ArticleService;