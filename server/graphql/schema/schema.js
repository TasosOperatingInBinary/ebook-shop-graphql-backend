const { GraphQLSchema } = require('graphql');
const RootQuery = require('../queries/queries');
const Mutation = require('../mutations/mutations');

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});