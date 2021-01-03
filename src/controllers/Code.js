
const compile = require("./CodeUtilities/Compilingfactory");
const executeCode = require("./CodeUtilities/executerLinuxMachine");


const CodeController = async (req, res) => {

    //receiving the request
    let codeData = req.body.codeData;
    console.log(codeData);
    
    //download file
    let file_name = codeData.file_name;
   
    //compiling
    const compilationDetails = await compile(codeData.language, file_name);
    console.log(compilationDetails);

    if (compilationDetails.code!==0) {
        return res.status(400).send(compilationDetails.stderr);
    }

    ////finding the problem specific dataset
    //let problem = ProblemModel.findOne(codeData.id_problem);
    //let dataset= problem.dataset;
   
   
    //running the code in a virtual container
    const runtimeDetails = await executeCode(file_name,dataset=codeData.dataset);
    //
    
    console.log(runtimeDetails);

    res.status(200).send({ message: "thanks" });
};
module.exports = CodeController;