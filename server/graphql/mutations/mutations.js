const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat, GraphQLList, GraphQLID } = require("graphql");
const Author = require('../../models/author');
const Book = require('../../models/book');
const Customer = require('../../models/customer');
const Publisher = require('../../models/publisher');
const ShoppingBasketItem = require('../../models/shopping-basket-item');
const ShoppingBasket = require('../../models/shopping-basket');
const Warehouse = require('../../models/warehouse');
const { AuthorType, BookType, CustomerType, PublisherType, ShoppingBasketItemType, ShoppingBasketType, WarehouseType } = require('../object-types/object-types');

const Mutation = new GraphQLObjectType({
    name: 'Mutations',
    fields: {
        addAuthor: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID },
                fullName: { type: GraphQLString },
                email: { type: GraphQLString },
                bookIds: { type: new GraphQLList(GraphQLID) }
            },
            resolve: (parent, args) => {
                args._id = args.id;
                delete args.id;
                let author = new Author({
                    ...args
                })
                return author.save();
            }
        },
        updateAuthorEmail: {
            type: AuthorType,
            args: {
                id: { type: GraphQLID },
                email: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                return Author.findOneAndUpdate({ _id: args.id }, { email: args.email });
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
                id: { type: GraphQLID },
                title: { type: GraphQLString },
                ISBN: { type: GraphQLString },
                publicationYear: { type: GraphQLInt },
                price: { type: GraphQLFloat },
                availableStock: { type: GraphQLInt },
                authorIds: { type: new GraphQLList(GraphQLID) },
                publisherId: { type: GraphQLID },
                warehouseId: { type: GraphQLID },
            },
            resolve: (parent, args) => {
                args._id = args.id;
                delete args.id;
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
                id: { type: GraphQLID },
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
                args._id = args.id;
                delete args.id;
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
                id: { type: GraphQLID },
                name: { type: GraphQLString },
                address : { type: GraphQLString },
                url: { type: GraphQLString },
                phoneNumbers: { type: new GraphQLList(GraphQLString) },
            },
            resolve: (parent, args) => {
                args._id = args.id;
                delete args.id;
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
        addShoppingBasket: {
            type: ShoppingBasketType,
            args: {
                id: { type: GraphQLID },
                dateOfPurchase: { type: GraphQLString },
                customerId: { type: GraphQLID },
            },
            resolve: (parent, args) => {
                args._id = args.id;
                delete args.id;
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
                id: { type: GraphQLID },
                phoneNumber: { type: GraphQLString },
                city: { type: GraphQLString },
                streetName: { type: GraphQLString },
                streetNumber: { type: GraphQLString },
                postalCode: { type: GraphQLString }
            },
            resolve: (parent, args) => {
                args._id = args.id;
                delete args.id;
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