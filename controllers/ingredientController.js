// ingredientController.js

const Ingredient = require('../models/ingredientsModel');

// Display the form to add a new ingredient
const showAddForm = (req, res) => {
    res.render('addIngredient', { title: 'Add New Ingredient' });
};

// Add a new ingredient to the database
const addIngredient = async (req, res) => {
    try {
        const { category, ingredients } = req.body;
        
        // Check if the ingredient already exists
        const existingIngredient = await Ingredient.findOne({ category, ingredients });
        if (existingIngredient) {
            return res.status(400).json({ message: 'Ingredient already exists' });
        }

        // Create a new ingredient
        const newIngredient = await Ingredient.create({ category, ingredients });
        res.status(201).json({ message: 'Ingredient added successfully', data: newIngredient });
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    showAddForm, addIngredient
}