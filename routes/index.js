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

/* GET apartment's details by ID. */
router.get('/apartments/:id', controllers.getApartmentById);

/* Add a new apartment. */
router.post('/apartments', upload.none(), validator('submitApartment'), controllers.submitApartment);

/* Edit apartment's parameters by ID. */
router.put('/apartments/:id', upload.none(), validator('submitApartment'), controllers.editApartmentById);

/* Delete apartment by ID. */
router.delete('/apartments/:id', controllers.deleteApartmentById);


module.exports = router;
