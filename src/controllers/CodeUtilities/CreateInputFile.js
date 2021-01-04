const fs = require('fs');

const createInputFile = async (solutions_input, file_name) => {

    let path = `/home/dimas/Desktop/microCRUD/src/public/uploads/${file_name}.txt`;
    let contentToWrite = solutions_input[0].input;
    console.log(path, contentToWrite);
    let answer = {
        error: false,
        message: null,
        test_path: path
    };
    fs.writeFile(path, contentToWrite,(err) => {

        if (err) {
            
            answer = {
                error: true,
                message: err,
                test_path: null
            };
            console.log(err);
        }
    });
                   
            
return answer;
};

const deleteInputFile = (path) => {

};

module.exports = { createInputFile, deleteInputFile }