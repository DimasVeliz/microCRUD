
const multer = require('multer');
const path = require('path');
const codeFilter = require('./CodeFilter');

const storage = multer.diskStorage({
    destination: `/home/dimas/Desktop/microCRUD/src/public/uploads/`,
    filename: (req, file, cb) => {
        let completeName = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
        cb(null, completeName)
    }
}
);

const upload = multer({
    storage: storage,
    limits: { fileSize: 2000000 },
    fileFilter: (req, file, cb) => {
        codeFilter(file, cb)
    }
});



module.exports =upload;