const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://mongo:27017');
mongoose.connection.once('open', () => { console.log('connected to database') });

app.listen('8080', () => console.log('listening on port 8080'));