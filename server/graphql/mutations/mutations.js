const { GraphQLObjectType } = require("graphql");

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {

    }
})

module.exports = Mutation;