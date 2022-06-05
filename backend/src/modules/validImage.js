const path = require('path');
const multer = require('multer');



//***  Multer configuration  ****/

const configuracionImagen = multer.diskStorage({

    destination: function(req, file, cb) { // request, archivo y callback que almacena archivo en destino
        if (req.body.event == 'test') {
            cb(null, path.join(__dirname, '../../public/images/products'));
        } else {
        cb(null, path.join(__dirname, '../../../frontend/public/products')); // Ruta donde almacenamos el archivo
          }
    },
    filename: function(req, file, cb) { // request, archivo y callback que almacena archivo en destino
        let imageName = "2882" + file.originalname; // milisegundos y extensión de archivo original
        cb(null, imageName);
    }
});

const fileFilter = (req, file, cb) => {
    if ((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')) {
        cb(null, true);
    } else {
        //cb(new multer.MulterError('not a PNG'), false);
        cb(null, false);
        return cb(new Error('No es una imagen'));
    }
};


const limits = {
    fileSize: 1024 * 1024 * 2, // tamaño en bytes, 4 mb 
    fieldNameSize: 200
}

/* 1tb = 1024 gb / 1 gb = 1024 mb / 1 mb = 1024 kb / 1 kb = 1024 bytes / 1 byte = 8 bits / 1 bit */


const uploadFile = multer({ storage: configuracionImagen, fileFilter: fileFilter, limits: limits });


module.exports = uploadFile;