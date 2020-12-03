const express = require('express')
const router = express.Router()
const ArticleController= require('../src/controllers/Article');

router.get('/',ArticleController.getAll)
router.post('/',ArticleController.create)
router.get('/:id',ArticleController.get)
//router.put('/:id',ArticleController.update)
//router.delete('/:id',ArticleController.delete)

module.exports = router