const mongoose = require('mongoose');
const path = require('path');
// const generalSchema = require(path.join(__dirname, 'schema'));
const generalSchema = require('./schema');

generalSchema.statics.getApartmentsByRoomsNumber = async function(roomsNumber) {
  return await this.find({ rooms: roomsNumber }).exec();
}

const modelname = path.basename(__dirname);

const model = mongoose.model(modelname, generalSchema);

module.exports = model;