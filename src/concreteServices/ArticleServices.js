const {baseCRUD}= require('../genericCRUD/genericCRUDBase')
const ArticleModel= require('../concreteModels/Article')

const ArticleService ={
    ...baseCRUD(ArticleModel),
};

export default ArticleService;