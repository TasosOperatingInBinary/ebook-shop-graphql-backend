const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    firstName: String,
    lastName: String,
    fathersName: String,
    email: String,
    city: String,
    streetName: String,
    streetNumber: String,
    postalCode: String,
    phoneNumbers: [String],
})

module.exports = mongoose.model('customer', customerSchema);