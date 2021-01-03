const shellExec = require('shell-exec')

const executeCode = async(file_name, problem_dataset)=>{

    
    let commandRun = `echo "dimas" | sudo -S docker run -i --rm -v "$PWD/src/public/uploads":/usr/src/myapp -w /usr/src/myapp ubuntu:18.04 ./${file_name} <${problem_dataset}`
   // let commandRun = `echo "dimas" | sudo -S docker run -i --rm -v "$PWD/src/public/uploads":/usr/src/myapp -w /usr/src/myapp ubuntu:18.04 ls`
   
    let infoDockerRun = await shellExec(commandRun).then((message) => {

        return message;
    })
        .catch(
            (err) => {

                return err;
            });
    



    return infoDockerRun;
};

module.exports= executeCode;