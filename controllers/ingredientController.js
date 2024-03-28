// ingredientController.js

const Ingredient = require('../models/ingredientsModel');

// Display the form to add a new ingredient
const showAddForm = (req, res) => {
    res.render('addIngredient', { title: 'Add New Ingredient' });
};

// Add a new ingredient to the database
const addIngredient = async (req, res) => {
    try {
        const { ingredient } = req.body;
        const existingIngredient = await Ingredient.findOne({ ingredient: ingredient });
        if (existingIngredient) {
            return res.redirect('/ingredients?error=IngredientAlreadyExists');
        }

        // Create a new ingredient
        const newIngredient = await Ingredient.create({ ingredient: ingredient });

        // Redirect the user to a different page
        res.redirect('/ingredients');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    showAddForm,
    addIngredient
};
