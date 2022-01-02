const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: String,
    ISBN: String,
    publicationYear: Number,
    price: Number,
    availableStock: Number,
    authorIds: [mongoose.ObjectId],
    publisherId: mongoose.ObjectId,
    warehouseId: mongoose.ObjectId
})

module.exports = mongoose.model('book', bookSchema);