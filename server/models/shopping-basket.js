const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingBasketSchema = new Schema({
    _id: String,
    dateOfPurchase: String,
    customerId: String,
})

module.exports = mongoose.model('shopping_basket', shoppingBasketSchema);