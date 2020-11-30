const PostService = require('../services/post');
const {baseCRUD}= require('../controllers/base');

const PostController={
    ...baseCRUD(PostService),
};

module.exports=PostController;