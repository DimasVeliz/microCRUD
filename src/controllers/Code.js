
const compile = require("./CodeUtilities/Compilingfactory");
const executeCode= require("./CodeUtilities/executerLinuxMachine");


const codeUpload= async (req, res) => {

    let codeData= req.codeData;

    //download file
    let file_name="";
    //
    const compilationDetails = compile(codeData.language,file_name);

    //
    let problem = ProblemModel.findOne(codeData.id_problem);
    let dataset= problem.dataset;

    const runtimeDetails = executeCode(file_name,dataset);

    console.log(runtimeDetails);
};
module.exports = codeUpload;