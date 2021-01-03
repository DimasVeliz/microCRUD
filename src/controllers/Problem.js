const ProblemService = require('../concreteServices/ProblemServices')
const {baseCRUDService} = require('../genericCRUDService/genericCRUDServiceBase')

const ProblemController ={
    ...baseCRUDService(ProblemService),
}


module.exports =  ProblemController;