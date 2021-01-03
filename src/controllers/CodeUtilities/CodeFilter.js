const codeFilter = (file, cb) =>{
    // Accept images only
    if (!file.originalname.match(/\.(c|cpp|cs|js|txt|py)$/)) {
        
     return cb("Only source code files are allowed!");
    }
   return cb(null, true);
};
module.exports = codeFilter;