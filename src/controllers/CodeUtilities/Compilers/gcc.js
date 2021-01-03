
const shellExec = require('shell-exec')



const compileGCC = async (file_name) => {


    let commandRun = `echo "dimas" | sudo -S docker run --rm -v "$PWD/src/public/uploads":/usr/src/myapp -w /usr/src/myapp gcc:4.9 gcc -o ${file_name} ${file_name}.c`
    let infoDockerRun = await shellExec(commandRun).then((message) => {

        return message;
    })
        .catch(
            (err) => {

                return err;
            });
    



    return infoDockerRun;
}

module.exports = compileGCC;