const shellExec = require('shell-exec')

const executeCode = async (file_name, problem_dataset=null) => {

    let exec_path = process.env.EXEC_PATH;

    let commandRun = null;
    if (problem_dataset) {
        commandRun = `echo "dimas" | sudo -S docker run -i --rm -v "${exec_path}":/usr/src/myapp -w /usr/src/myapp ubuntu:18.04 ./${file_name} < ${problem_dataset}`
    } else {
        commandRun = `echo "dimas" | sudo -S docker run -i --rm -v "${exec_path}":/usr/src/myapp -w /usr/src/myapp ubuntu:18.04 ./${file_name}`
    }



    let infoDockerRun = await shellExec(commandRun).then((message) => {

        return message;
    })
        .catch(
            (err) => {

                return err;
            });




    return infoDockerRun;
};

module.exports = executeCode;