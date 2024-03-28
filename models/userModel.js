const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    "fullname": String,
    "email": String,
    "phone": String,
    "gender": String,
    "username": String,
    "password": String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
