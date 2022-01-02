const { GraphQLObjectType } = require("graphql");

const RootQuery = new GraphQLObjectType({
    name: 'Root Queries',
    fields: {

    }
})

module.exports = RootQuery;