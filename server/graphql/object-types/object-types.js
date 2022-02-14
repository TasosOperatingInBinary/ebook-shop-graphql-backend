const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList } = require("graphql");
const Author = require('../../models/author');
const Book = require('../../models/book');
const Customer = require('../../models/customer');
const Publisher = require('../../models/publisher');
const ShoppingBasketItem = require('../../models/shopping-basket-item');
const ShoppingBasket = require('../../models/shopping-basket');
const Warehouse = require('../../models/warehouse');

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        fullName: { type: GraphQLString },
        email: { type: GraphQLString },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                result = []
                parent.bookIds.forEach(bookId => {
                    result.push(Book.findById(bookId))
                });

                return result;
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
                return Publisher.findById(parent.publisherId);
            }
        },
        warehouse: { 
            type: WarehouseType,
            resolve: (parent, args) => {
                return Warehouse.findById(parent.warehouseId)
            }    
        },
        authors: {
            type: new GraphQLList(AuthorType),
            resolve: (parent, args) => {
                result = []
                parent.authorIds.forEach(authorId => {
                    result.push(Author.findById(authorId))
                });

                return result;
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
                return parent.phoneNumbers;
            }
        },
        shoppingBaskets: {
            type: new GraphQLList(ShoppingBasketType),
            resolve: (parent, args) => {
                return ShoppingBasket.find({ customerId: parent['_id'] });  
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
                return parent.phoneNumbers;
            }
        },
        books: {
            type: new GraphQLList(BookType),
            resolve: (parent, args) => {
                return Book.find({ publisherId: parent['_id']})
            }
        }
    })
})

const ShoppingBasketItemType = new GraphQLObjectType({
    name: 'ShoppingBasketItem',
    fields: () => ({
        book: { 
            type: BookType,
            resolve: (parent, args) => {
                return Book.findById(parent.bookId);
            }
        },
        finalPrice: { type: GraphQLFloat }
    })
})

const ShoppingBasketType = new GraphQLObjectType({
    name: 'ShoppingBasket',
    fields: () => ({
        id: { type: GraphQLID },
        dateOfPurchase: { type: GraphQLString },
        customer: {
            type: CustomerType,
            resolve: (parent, args) => {
                return Customer.findById(parent.customerId);
            }
        },
        items: {
            type: new GraphQLList(ShoppingBasketItemType),
            resolve: (parent, args) => {
                return ShoppingBasketItem.find({shoppingBasketId: parent['_id']});
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
                return Book.find({warehouseId: parent['_id']});
            }
        }
    })
})

module.exports = { AuthorType, BookType, CustomerType, PublisherType, ShoppingBasketItemType, ShoppingBasketType, WarehouseType }