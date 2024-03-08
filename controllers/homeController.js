const Recipe = require('../models/recipeModel');
const RecipeShare = require('../models/recipesharingModel');
const Ingredient = require('../models/ingredientsModel')
function getIndex(req, res) {
    res.render('pages/index', { title: 'Index' });
}

const getRecipes = async(req, res) => {
    try {
        const recipes = await Recipe.find({}).exec();
        res.render('pages/recipes', { recipes: recipes });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
    res.render('pages/recipes', { title: 'Recipes' });
}

const getIngredients = async (req, res) => {
    try {
        const ingredients = await Ingredient.find({}).exec(); // Fetch all ingredients from the database
        res.render('pages/ingredients', { ingredients: ingredients }); // Render the ingredients template with the fetched data
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

function getRecipeSharing(req, res) {
    res.render('pages/recipe-sharing', { title: 'Recipe Sharing' });
}

function getRegister(req, res) {
    res.render('pages/register', { title: 'Register' });
}

function getAbout(req, res) {
    res.render('pages/about', { title: 'About' });
}

module.exports = {
    getIndex,
    getRecipes,
    getIngredients,
    getRecipeSharing,
    getRegister,
    getAbout
};
