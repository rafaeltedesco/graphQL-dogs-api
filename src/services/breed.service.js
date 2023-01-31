const { Breed, Dog } = require('../models');

const getBreeds = async () => Breed.findAll({ include: { model: Dog, as: 'dogs' } });

const getBreedById = async (id) => Breed.findByPk(id, { include: { model: Dog, as: 'dogs' } });

module.exports = {
  getBreeds,
  getBreedById,
};
