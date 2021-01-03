const express = require('express')
const router = express.Router()
const ProblemController = require('../src/controllers/Problem');

const CodeController = require('../src/controllers/Code');
const upload = require("../src/controllers/CodeUtilities/UploadManager");


//uploadcode
router.post('/code',upload.single("my_file"),CodeController);


//problems
router.get('/problem',ProblemController.getAll);
router.post('/problem',ProblemController.create);
router.get('/problembyId:id',ProblemController.get);



module.exports = router