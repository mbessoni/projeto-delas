const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://admin:cFZPV6BLV9W5p4dv@mbessoni.igowoqu.mongodb.net/delas");

let db = mongoose.connection;

module.exports = db;