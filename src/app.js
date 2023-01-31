const { graphqlHTTP } = require('express-graphql');
const express = require('express');
const { graphqlSchema } = require('./graphQL/schemas');
const { graphqlResolvers } = require('./graphQL/resolvers');

const app = express();

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphqlResolvers,
  graphiql: true,
}));

module.exports = app;
