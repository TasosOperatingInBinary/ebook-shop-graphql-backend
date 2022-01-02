const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingBasketItemSchema = new Schema({
    bookId: mongoose.ObjectId,
    shoppingBasketId: mongoose.ObjectId,
    finalPrice: Number
})

module.exports = mongoose.model('shopping_basket_item', shoppingBasketItemSchema)