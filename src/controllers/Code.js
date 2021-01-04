const path = require('path');
const ProblemModel = require('../concreteModels/ProblemModel');
const compile = require("./CodeUtilities/Compilingfactory");
const executeCode = require("./CodeUtilities/executerLinuxMachine");
const {createInputFile,deleteInputFile} = require("./CodeUtilities/CreateInputFile");

const CodeController = async (req, res) => {


    //getting needed variables from req after middleware acted
    let filepath = req.file.path;
    let extension = path.extname(req.file.originalname)
    let file_name = path.basename(filepath, extension);
    let language = req.body.language;
    let id_problem = req.body.id_problem;



    if (!file_name) {
        return res.status(500).send("Could not download the file");
    }

    //compiling
    const compilationDetails = await compile(language, file_name, extension);


    //checking it there was compilation error
    if (compilationDetails.code !== 0) {
        return res.status(400).send(compilationDetails.stderr);
    }

    //finding the problem specific dataset
    let problem = null;
    let message=null;
    await ProblemModel.findOne({ _id: id_problem }).then(problemInBd => {
        problem = problemInBd;
    }).catch(err => {
        message=err;
    });

    if (!problem) {
        return res.status(400).send("Problem not found");
    }
    let dataset = problem.solutionExample;


    //building testCases in a file
    let test_info= await createInputFile(dataset,file_name);
    if (test_info.error) {
        return res.status(400).send("Couldnt create file with test");        
    }

    //running the code in a virtual container
    const runtimeDetails = await executeCode(file_name,dataset=test_info.test_path);
    console.log(runtimeDetails);

    res.status(200).send({ message: "thanks" });
};
module.exports = CodeController;