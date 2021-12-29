const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const warehouseSchema = new Schema({
    phoneNumber: String,
    city: String,
    streetName: String,
    streetNumber: String,
    postalCode: String
})

module.exports = mongoose.model('warehouse', warehouseSchema);