const mongoose = require('mongoose');
const path = require('path');
// const generalSchema = require(path.join(__dirname, 'schema'));
const generalSchema = require('./schema');

const modelname = path.basename(__dirname);

const model = mongoose.model(modelname, generalSchema);

module.exports = model;