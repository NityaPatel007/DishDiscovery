const Recipe = require('../models/recipeModel');
const RecipeShare = require('../models/recipesharingModel');
const Ingredient = require('../models/ingredientsModel');
const Cuisine = require('../models/cuisineModel');
const Comment = require('../models/commentModel');
const User = require("../models/userModel")
function getIndex(req, res) {
    res.render('pages/index', { title: 'Index' });
}

function getUser(req, res) {
    res.render('pages/user', { title: 'User' });
}
const getRecipes = async (req, res) => {
    try {
        const recipes = await Recipe.find({}).exec();
        const sharedRecipes = await RecipeShare.find({}).exec(); // Fetch shared recipes
        const allRecipes = [...recipes, ...sharedRecipes]; // Combine recipes from both models
        const comments = await Comment.find({}).exec(); 
        const user = await User.findOne({}).exec();
        res.render('pages/recipes', { recipes: allRecipes, comments: comments, user: user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


const getIngredients = async (req, res) => {
    try {
        const ingredient = await Ingredient.find({}).exec(); // Fetch all ingredients from the database
        res.render('pages/ingredients', { ingredient: ingredient }); // Render the ingredients template with the fetched data
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getCuisine = async (req, res) => {
    try {
        const cuisine = await Cuisine.find({}).exec(); // Fetch all cuisines from the database
        res.render('pages/cuisine', { cuisine: cuisine }); // Render the cuisines template with the fetched data
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
const getLogin = (req, res) => {
    res.render('pages/login', { title: 'Login' });
}
function getAbout(req, res) {
    res.render('pages/about', { title: 'About' });
}

module.exports = {
    getIndex,
    getRecipes,
    getLogin,
    getIngredients,
    getCuisine,
    getRecipeSharing,
    getRegister,
    getAbout,
    getUser
};
