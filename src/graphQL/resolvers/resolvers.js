const { dogService, breedService } = require('../../services');

const graphqlResolvers = {
  getDogs: () => dogService.getDogs(),
  getDog: (args) => dogService.getDogById(args.id),
  getBreeds: () => breedService.getBreeds(),
  getBreed: (args) => breedService.getBreedById(args.id),
};

module.exports = graphqlResolvers;
