const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shoppingBasketSchema = new Schema({
    dateOfPurchase: Date,
    customerId: String,
})

module.exports = mongoose.model('shopping_basket', shoppingBasketSchema);