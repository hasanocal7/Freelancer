const router = require('express').Router();
const freelancerController = require('../controller/freelancerController');

const fs = require('fs');
const path = require('path');
const multer = require('multer');
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const rootDir = path.dirname(require.main.filename)
      console.log("require.main.filename : ",require.main.filename);

      fs.mkdirSync(path.join(rootDir, "/public/uploads"), { recursive: true })
      cb(null, path.join(rootDir, "/public/uploads"))
    },
    filename: function (req, file, cb) {
      const extension = file.mimetype.split("/")[1]

      if (!req.savedImages) req.savedImages = []

      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)

      let url = `image_${uniqueSuffix}.${extension}`

      req.savedImages = [...req.savedImages, path.join(url)]

      cb(null, url)
    }
  })
});

router.post("/", upload.single('image'), freelancerController.createFreelancer);
router.delete("/:id", freelancerController.deleteFreelancer);
router.put("/:id", freelancerController.updateFreelancer);

module.exports = router;