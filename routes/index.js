const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const validator = require('../routes/validator/index').validation;
const controllers = require('../controllers');

/* GET home page. */
router.get('/', controllers.showIndex);

/* GET the list of all apartments. */
router.get('/apartments', controllers.getAllApartments);

/* POST apartments. */
router.post('/apartments', upload.none(), validator('submitApartment'), controllers.submitApartment);


module.exports = router;
