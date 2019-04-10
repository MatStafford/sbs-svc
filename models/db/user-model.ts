const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: <any>String,
    password: <any>String
});

module.exports = mongoose.model('User', userSchema);