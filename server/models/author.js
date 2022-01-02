const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
    fullName: String,
    email: String,
    bookIds: [mongoose.ObjectId]
})

module.exports = mongoose.model('author', authorSchema);