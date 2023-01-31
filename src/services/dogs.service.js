const { Dog, Breed } = require('../models');

const getDogs = async () => Dog.findAll({ include: { model: Breed } });

module.exports = {
  getDogs,
};
