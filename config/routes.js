const express = require('express')
const router = express.Router()
const ArticleController= require('../src/controllers/Article');
const BookController = require('../src/controllers/Book');

router.get('/article',ArticleController.getAll)
router.post('/article',ArticleController.create)
router.get('/article:id',ArticleController.get)
//router.put('/:id',ArticleController.update)
//router.delete('/:id',ArticleController.delete)

router.get('/book',BookController.getAll)
router.post('/book',BookController.create)
router.get('/book:id',BookController.get)

module.exports = router