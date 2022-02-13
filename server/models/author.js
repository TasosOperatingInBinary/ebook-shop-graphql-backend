const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    _id: String,
    fullName: String,
    email: String,
    bookIds: [String]
})

module.exports = mongoose.model('author', authorSchema);