const RecipeShare = require('../models/recipesharingModel');

const submitRecipe = async (req, res) => {
    try {
        const { title, description, cuisine, ingredients, instructions, image } = req.body;
        const recipe = await RecipeShare.create({ title, description, cuisine, ingredients, instructions, image});
        res.status(201).json({ status: 'success', data: { recipe } });
    } catch (err) {
        res.status(400).json({ status: 'fail', message: err.message });
    }
};

module.exports = {
    submitRecipe
}