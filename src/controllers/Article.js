const ArticleService = require('../concreteServices/ArticleServices')
const {baseCRUDService} = require('../genericCRUDService/genericCRUDServiceBase')

const ArticleController ={
    ...baseCRUDService(ArticleService),
}


module.exports =  ArticleController;