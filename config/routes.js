const express= require('express');
const router= express.Router()
const PostController =require('../controllers/post');

router.get('/',PostController.getAll)
router.post('/',PostController.create)
router.get('/:id',PostController.get)
router.put('/:id',PostController.update)
router.delete('/:id',PostController.delete)

module.exports= router;