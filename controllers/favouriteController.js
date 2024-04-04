// favoriteController.js

const Favourite = require('../models/favouriteModel');
const Recipe = require("../models/recipeModel");

// Add a favorite recipe for a user
const addFavorite = async (req, res) => {
    try {
        const { user_id, recipe_id } = req.body;
        const existingFavorite = await Favourite.findOne({ user_id, recipe_id });
        if (existingFavorite) {
            return res.status(400).json({ message: 'Recipe already favorited by user' });
        }
        const favorite = await Favourite.create({ user_id, recipe_id });
        res.redirect('/recipes'); // Redirect to the recipes page or any other appropriate page
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Fetch all favorite recipes for a user
const getFavorites = async (req, res) => {
    try {
        const { user_id } = req.body; // Assuming user_id is passed as a parameter
        const favourites = await Favourite.find({ user_id:user_id }).populate('recipe').exec();
        res.render('pages/favourites', { favourites: favourites }); // Assuming you have a view named 'favorites' to render favorite recipes
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a favorite recipe for a user
const deleteFavorite = async (req, res) => {
    try {
        const { user_id, recipe_id } = req.body;
        const deletedFavorite = await Favourite.findOneAndDelete({ user_id, recipe_id });
        if (!deletedFavorite) {
            return res.status(404).json({ message: 'Favorite recipe not found' });
        }
        res.redirect('/favourites'); // Redirect to the favorites page or any other appropriate page
    } catch (error) {
        console.error('Error deleting favorite:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addFavorite, getFavorites, deleteFavorite };
