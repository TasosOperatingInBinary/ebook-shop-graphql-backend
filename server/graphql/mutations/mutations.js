const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList, GraphQLID } = require("graphql");
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
    ShoppingBasketItemType,
    ShoppingBasketType,
    WarehouseType 
} = require('../object-types/object-types');

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                fullName: { type: GraphQLString },
                email: { type: GraphQLString },
                bookIds: { type: new GraphQLList(GraphQLID) }
            },
            resolve: (parent, args) => {
                let author = new Author({
                    ...args
                })
                return author.save();
            }
        },
        deleteAuthorById: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return Author.findByIdAndDelete(args.id);
            }
        },
        addBook: {
            type: BookType,
            args: {
                title: { type: GraphQLString },
                ISBN: { type: GraphQLString },
                publicationYear: { type: GraphQLInt },
                price: { type: GraphQLFloat },
                availableStock: { type: GraphQLInt },
                authorIds: { type: new GraphQLList(GraphQLID)},
                publisherId: { type: GraphQLID },
                warehouseId: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                let book = new Book({
                    ...args
                })
                return book.save();
            }
        },
        deleteBookById: {
            type: BookType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return Book.findByIdAndDelete(args.id);
            }
        },
        addCustomer: {
            type: CustomerType,
            args: {
                firstName: { type: GraphQLString },
                lastName: { type: GraphQLString },
                fathersName: { type: GraphQLString },
                email: { type: GraphQLString },
                city: { type: GraphQLString },
                streetName: { type: GraphQLString },
                streetNumber: { type: GraphQLString },
                postalCode: { type: GraphQLString },
                phoneNumbers: { type: new GraphQLList(GraphQLString) }
            },
            resolve: (parent, args) => {
                let customer = new Customer({
                    ...args
                })
                return customer.save();
            }
        },
        deleteCustomerById: {
            type: CustomerType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return Customer.findByIdAndDelete(args.id);
            }
        },
        addPublisher: {
            type: PublisherType,
            args: {
                name: { type: GraphQLString },
                address : { type: GraphQLString },
                url: { type: GraphQLString },
                phoneNumbers: { type: new GraphQLList(GraphQLString) },
            },
            resolve: (parent, args) => {
                let publisher = new Publisher({
                    ...args
                })
                return publisher.save();
            }
        },
        deletePublisherById: {
            type: PublisherType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return Publisher.findByIdAndDelete(args.id);
            }
        },
        addShoppingBasketItem: {
            type: ShoppingBasketItemType,
            args: {
                bookId: { type: GraphQLID },
                shoppingBasketId: { type: GraphQLID },
                finalPrice: { type: GraphQLFloat }
            },
            resolve: (parent, args) => {
                let shoppingBasketItem = new ShoppingBasketItem({
                    ...args
                })
                return shoppingBasketItem.save();
            }
        },
        deleteShoppingBasketItemById: {
            type: ShoppingBasketItemType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return ShoppingBasketItem.findByIdAndDelete(args.id);
            }
        },
        addShoppingBasket: {
            type: ShoppingBasketType,
            args: {
                dateOfPurchase: { type: GraphQLString },
                customerId: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                let shoppingBasket = new ShoppingBasket({
                    ...args
                })
                return shoppingBasket.save();
            }
        },
        deleteShoppingBasketById: {
            type: ShoppingBasketType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return ShoppingBasket.findByIdAndDelete(args.id);
            }
        },
        addWarehouse: {
            type: WarehouseType,
            args: {
                phoneNumber: { type: GraphQLString },
                city: { type: GraphQLString },
                streetName: { type: GraphQLString },
                streetNumber: { type: GraphQLString },
                postalCode: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                let warehouse = new Warehouse({
                    ...args
                })
                return warehouse.save();
            }
        },
        deleteWarehouseById: {
            type: WarehouseType,
            args: {
                id: { type: GraphQLID }
            },
            resolve: (parent, args) => {
                return Warehouse.findByIdAndDelete(args.id);
            }
        },
    }
})

module.exports = Mutation;