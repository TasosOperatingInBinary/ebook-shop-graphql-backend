const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    bookId: String,
    finalPrice: Number
})

const shoppingBasketSchema = new Schema({
    dateOfPurchase: Date,
    customerId: String,
    items: [itemSchema]
})

module.exports = mongoose.model('shopping_basket', shoppingBasketSchema);