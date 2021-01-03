const compileDotNet = require('./Compilers/dotnet');
const compileGCC = require('./Compilers/gcc');


const factory ={
    'C/C++':compileGCC,
    '.Net':compileDotNet
};

const compileCode = async(language,file_name)=>{

    const selected= factory[language];
    return await selected(file_name);
};

module.exports= compileCode;