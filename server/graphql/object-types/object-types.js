const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } = require("graphql");

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        fullName: { type: GraphQLString },
        email: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                
            }
        }
    })
})

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        ISBN: { type: GraphQLString },
        publicationYear: { type: GraphQLInt },
        price: { type: GraphQLFloat },
        availableStock: { type: GraphQLInt },
        publisher: { 
            type: PublisherType,
            resolve: (parent, args) => {

            }
        },
        warehouse: { 
            type: WarehouseType,
            resolve: (parent, args) => {

            }    
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: (parent, args) => {
                
            }
        }
    })
})

const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    fields: () => ({
        id: { type: GraphQLID },
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        fathersName: { type: GraphQLString },
        email: { type: GraphQLString },
        city: { type: GraphQLString },
        streetName: { type: GraphQLString },
        streetNumber: { type: GraphQLString },
        postalCode: { type: GraphQLString },
        phoneNumbers: {
            type: new GraphQLList(GraphQLString),
            resolve: (parent, args) => {

            }
        },
        shoppingBaskets: {
            type: new GraphQLList(ShoppingBasketType),
            resolve: (parent, args) => {
                
            }
        }
    })
})

const PublisherType = new GraphQLObjectType({
    name: 'Publisher',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        address : { type: GraphQLString },
        url: { type: GraphQLString },
        phoneNumbers: {
            type: new GraphQLList(GraphQLString),
            resolve: (parent, args) => {

            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                
            }
        }
    })
})

const ShoppingBasketItemType = new GraphQLObjectType({
    name: 'Shopping Basket Item',
    fields: () => ({
        book: { 
            type: BookType,
            resolve: (parent, args) => {

            } 

        },
        finalPrice: { type: GraphQLFloat }
    })
})

const ShoppingBasketType = new GraphQLObjectType({
    name: 'Shopping Basket',
    fields: () => ({
        id: { type: GraphQLID },
        dateOfPurchase: { type: GraphQLDate },
        customer: {
            type: CustomerType,
            resolve: (parent, args) => {

            }
        },
        items: {
            type: new GraphQLList(ShoppingBasketItemType),
            resolve: (parent, args) => {
                
            }
        }
    })
})

const WarehouseType = new GraphQLObjectType({
    name: 'Warehouse',
    fields: () => ({
        id: { type: GraphQLID },
        phoneNumber: { type: GraphQLString },
        city: { type: GraphQLString },
        streetName: { type: GraphQLString },
        streetNumber: { type: GraphQLString },
        postalCode: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                
            }
        }
    })
})