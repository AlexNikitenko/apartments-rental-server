const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const validator = require('../routes/validator/index').validation;
const controllers = require('../controllers');

router.get('/', controllers.showIndex);

router.get('/apartments', controllers.getAllApartments);

router.get('/apartments/:id', controllers.getApartmentById);

router.post('/apartments', upload.none(), validator('apartment'), controllers.addApartment);

router.put('/apartments/:id', upload.none(), validator('apartment'), controllers.editApartmentById);

router.delete('/apartments/:id', controllers.deleteApartmentById);


module.exports = router;
