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
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

//Get Appartment by ID
const getApartmentById = async (req, res) => {
  const {id} = req.params;
  try {
    const apartment = await Apartments.findById(id).exec();
    res.status(200).json({
      data: apartment
    })
  } catch(err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

//Delete Appartment by ID
const deleteApartmentById = async (req, res) => {
  const {id} = req.params;
  try {
    await Apartments.findByIdAndDelete(id);
    res.status(200).json({
      data: `The apartment with ID#${id} has been deleted`
    })
  } catch(err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

//Edit Appartment by ID
const editApartmentById = async (req, res) => {
  const {id} = req.params;
  try {
    const {rooms, name, price, description} = req.body;
    console.log('updatedObj', rooms, name, price, description);
    const updatedApartment = await Apartments.findByIdAndUpdate(id, { $set: { rooms, name, price, description } });
    res.status(200).json({
      data: updatedApartment
    })
  } catch(err) {
    console.log(err);
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

module.exports = {
  showIndex,
  getAllApartments,
  submitApartment,
  getApartmentById,
  deleteApartmentById,
  editApartmentById
};