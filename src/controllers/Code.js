
const compile = require("./CodeUtilities/Compilingfactory");
const executeCode = require("./CodeUtilities/executerLinuxMachine");


const CodeController = async (req, res) => {

    let codeData = 'C/C++';
    
    //download file
    let file_name = "probando";
    //
    const compilationDetails = await compile(codeData, file_name);
    console.log(compilationDetails);

    ////
    //let problem = ProblemModel.findOne(codeData.id_problem);
    //let dataset= problem.dataset;
    //
    //const runtimeDetails = executeCode(file_name,dataset);
    //
    //console.log(runtimeDetails);

    res.status(200).send({ message: "thanks" });
};
module.exports = CodeController;