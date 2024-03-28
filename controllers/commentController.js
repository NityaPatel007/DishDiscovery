// commentController.js

const Comment = require('../models/commentModel');

const addComment = async (req, res) => {
  try {
    const { recipeId, comments } = req.body;
    const newComment = await Comment.create({ recipeId: recipeId, comments: comments }); // Assuming the text field in your Comment model represents the comment itself
    
    res.redirect('/recipes')
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getCommentsByRecipeId = async (req, res) => {
  try {
    const { recipeId, comments } = req.body;
    const comment = await Comment.find({ recipeId: recipeId, comments: comments});
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
    addComment, getCommentsByRecipeId
};