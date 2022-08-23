const Apartments = require('../model/Apartments');

//Show Index Route
const showIndex = (req, res) => {
  res.send('Home Page');
};

//Get the list of all apartments
const getAllApartments = async (req, res) => {
  try {
    const {
      price,
      rooms
    } = req.query;
    // const apartmentsArr = await Apartments.find({});
    const apartmentsArr = [];
    if (!price && !rooms) {
      apartmentsArr.push(await Apartments.find({}));
    } else {
      if (price === 'asc') {
        const resultArr = await Apartments.getApartmentsByRoomsNumber(rooms);
        resultArr.sort((a, b) => a.price - b.price);
        apartmentsArr.push(resultArr);
      }
      if (price === 'desc') {
        const resultArr = await Apartments.getApartmentsByRoomsNumber(rooms);
        resultArr.sort((a, b) => b.price - a.price);
        apartmentsArr.push(resultArr);
      }
    }
    res.status(200).json({
      data: apartmentsArr
    });
  } catch (err) {
    console.log('errrors', err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

//Submit the Apartment to the database

const submitApartment = async (req, res) => {
  try {
    const newApartment = new Apartments(req.body);
    const apartment = await newApartment.save();
    res.status(200).json({
      data: apartment
    })
  } catch(err) {
    console.log('Error>>>', err.message);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

module.exports = {
  showIndex,
  getAllApartments,
  submitApartment
};