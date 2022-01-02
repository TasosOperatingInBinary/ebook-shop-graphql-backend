const { GraphQLObjectType, GraphQLList, GraphQLID } = require("graphql");
const Author = require('../../models/author');
const Book = require('../../models/book');
const Customer = require('../../models/customer');
const Publisher = require('../../models/publisher');
const ShoppingBasketItem = require('../../models/shopping-basket-item');
const ShoppingBasket = require('../../models/shopping-basket');
const Warehouse = require('../../models/warehouse');
const { 
    AuthorType,
    BookType,
    CustomerType,
    PublisherType,
    ShoppingBasketType,
    WarehouseType 
} = require('../object-types/object-types');

const RootQuery = new GraphQLObjectType({
    name: 'Queries',
    fields: {
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: (parent, args) => {
                return Author.find({});
            }
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                return Author.findById(args.id);
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                return Book.find({});
            }
        },
        book: {
            type: BookType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                return Book.findById(args.id);
            }
        },
        customers: {
            type: new GraphQLList(CustomerType),
            resolve: (parent, args) => {
                return Customer.find({});
            }
        },
        customer: {
            type: CustomerType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                return Customer.findById(args.id);
            }
        },
        publishers: {
            type: new GraphQLList(PublisherType),
            resolve: (parent, args) => {
                return Publisher.find({});
            }
        },
        publisher: {
            type: PublisherType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                return Publisher.findById(args.id);
            }
        },
        shoppingBaskets: {
            type: new GraphQLList(ShoppingBasketType),
            resolve: (parent, args) => {
                return ShoppingBasket.find({});
            }
        },
        shoppingBasket: {
            type: ShoppingBasketType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                return ShoppingBasket.findById(args.id);
            }
        },
        warehouses: {
            type: new GraphQLList(WarehouseType),
            resolve: (parent, args) => {
                return Warehouse.find({});
            }
        },
        warehouse: {
            type: WarehouseType,
            args: { id: { type: GraphQLID }},
            resolve: (parent, args) => {
                return Warehouse.findById(args.id);
            }
        }
    }
})

module.exports = RootQuery;