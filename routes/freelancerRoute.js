const router = require('express').Router();
const freelancerController = require('../controller/freelancerController');

router.post("/", freelancerController.createFreelancer);

module.exports = router;