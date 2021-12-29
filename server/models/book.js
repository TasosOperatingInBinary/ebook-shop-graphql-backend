const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    ISBN: String,
    publicationYear: Number,
    price: Number,
    availableStock: Number,
    authorIds: [String],
    publisherId: String,
    warehouseId: String
})

module.exports = mongoose.model('book', bookSchema);