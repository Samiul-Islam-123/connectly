const multer = require("multer");

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/uploads");
    },
    filename: function (_, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

exports.upload = upload;
