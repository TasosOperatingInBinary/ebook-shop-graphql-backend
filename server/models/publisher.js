const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
    _id: String,
    name: String,
    address: String,
    url: String,
    phoneNumbers: [String]
})

module.exports = mongoose.model('publisher', publisherSchema);