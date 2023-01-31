const { buildSchema } = require('graphql');

const graphqlSchema = buildSchema(`
  type Dog {
    id: Int,
    name: String,
    age: Int,
    breed: Breed
  }
  type Breed {
    id: Int,
    name: String
    dogs: [Dog]
  }
  type Query {
    getDogs: [Dog]
    getDog(id: Int): Dog
    getBreeds: [Breed]
    getBreed(id: Int): Breed
  }
`);

module.exports = graphqlSchema;
