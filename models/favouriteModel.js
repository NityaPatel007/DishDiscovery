// favouritesModel.js

const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    recipe_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Recipe',
        required: true
    }
});

const Favourite = mongoose.model('Favourite', favouriteSchema);

module.exports = Favourite;
