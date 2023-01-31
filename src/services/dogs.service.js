const { Dog, Breed } = require('../models');

const getDogs = async () => Dog.findAll({ include: { model: Breed, as: 'breed' } });

const getDogById = async (id) => Dog.findByPk(id, { include: { model: Breed, as: 'breed' } });

module.exports = {
  getDogs,
  getDogById,
};
