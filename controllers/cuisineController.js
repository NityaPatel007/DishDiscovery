const Cuisine = require('../models/cuisineModel');

const showAddForm2 = (req, res) => {
    res.render('addCuisine', { title: 'Add New Cuisine' });
};

const addCuisine = async (req, res) => {
    try {
        const { cuisine } = req.body;
        const existingCuisine = await Cuisine.findOne({ cuisine: cuisine });
        if (existingCuisine) {
            return res.status(400).json({ message: 'Cuisine already exists' });
        }

        const newCuisine = await Cuisine.create({ cuisine: cuisine });
        res.redirect('/cuisine');
    } catch (err) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    showAddForm2, addCuisine
};
