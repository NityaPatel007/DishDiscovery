const RecipeShare = require('../models/recipesharingModel');

const submitRecipe = async (req, res) => {
    try {
        const { title, description, cuisine, ingredients, instructions, image } = req.body;
        const recipe = await RecipeShare.create({ title, description, cuisine, ingredients, instructions, image});
        res.redirect('/recipes');
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    submitRecipe
}