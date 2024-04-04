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
        // Fetch the recipe details
        const recipe = await Recipe.findById(recipe_id);
        if (!recipe) {
            return res.status(404).json({ message: 'Recipe not found' });
        }
        // Create a new favorite with recipe title and ID
        const favorite = await Favourite.create({ user_id, recipe_id, recipe_title: recipe.title });
        res.redirect('/recipes'); // Redirect to the recipes page or any other appropriate page
    } catch (error) {
        console.error('Error adding favorite:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Fetch all favorite recipes for a user
const getFavorites = async (req, res) => {
    try {
        // Fetch only the recipe titles for the user's favorite recipes
        const favourites = await Favourite.find({}).exec();
        res.render('pages/favourites', { favourites: favourites });
    } catch (error) {
        console.error('Error fetching favorites:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { addFavorite, getFavorites };
