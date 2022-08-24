const Apartments = require('../model/Apartments');

const showIndex = (req, res) => {
  res.send('Home Page');
};

const getAllApartments = async (req, res) => {
  try {
    const {
      price,
      rooms
    } = req.query;
    const apartmentsArr = [];
    const apartments = Number.isInteger(+rooms) ?
      await Apartments.find({ rooms }) :
      await Apartments.find({});

    if (price === 'asc') {
      apartments.sort((a, b) => a.price - b.price);
    } else if (price === 'desc') {
      apartments.sort((a, b) => b.price - a.price);
    }

    res.status(200).json({
      data: apartments
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

const getApartmentById = async (req, res) => {
  const {id} = req.params;
  try {
    const apartment = await Apartments.findById(id);

    if (!apartment) {
      return res.status(404).json({
        message: 'Not Found'
      });
    }

    res.status(200).json({
      data: apartment
    })
  } catch (err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

const addApartment = async (req, res) => {
  try {
    const { rooms, name, price, description } = req.body;
    const newApartment = new Apartments({ rooms, name, price, description });
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

const editApartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const { rooms, name, price, description } = req.body;
    const updatedApartment = await Apartments.findByIdAndUpdate(id, {
      $set: { rooms, name, price, description }
    }, {
      new: true
    });
    res.status(200).json({
      data: updatedApartment
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

const deleteApartmentById = async (req, res) => {
  const { id } = req.params;
  try {
    const apartment = await Apartments.findByIdAndDelete(id);

    if (!apartment) {
      return res.status(404).json({
        message: 'Not Found'
      });
    }

    res.status(200).json({
      data: `The apartment with ID#${id} has been deleted`
    });
  } catch (err) {
    res.status(500).json({
      message: 'Server Error'
    });
  }
};

module.exports = {
  showIndex,
  getAllApartments,
  addApartment,
  getApartmentById,
  deleteApartmentById,
  editApartmentById
};