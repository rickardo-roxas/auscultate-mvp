const multer = require("multer");
const path = require("path");

// Multer storage engine configuration to save files to disk in "uploads" folder
const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    cb(null, "api/uploads");
  },
  filename: function (_req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
  },
});

// Multer file filter for WAV and MP3 files
function fileFilter(_req, file, cb) {
  // variable to hold allowed types
  if (file.mimetype === "audio/wav" || file.mimetype === "audio/mpeg") {
    cb(null, true);
  }

  cb(new Error("Invalid file type, only WAV and MP3 is allowed!"), false);
}

// Multer configuration
const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 10 * 1024 * 1024,
  },
}).single("file");

/**
 * Upload file controller
 * @param {*} req
 * @param {*} res
 * @return {*} JSON response with file info or error message
 */
async function uploadFile(req, res) {
  // Multer middleware
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({
        error: err.message,
      });
    } else if (err) {
      return res.status(400).json({
        error: err.message,
      });
    }

    if (!req.file) {
      return res.status(400).json({
        error: "No file uploaded",
      });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      file: req.file,
      filePath: req.file.path, // relative path to the uploaded file
    });
  });
}

module.exports = {
  uploadFile,
};
