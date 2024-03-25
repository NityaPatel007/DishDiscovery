const express = require("express");
const router = express.Router();

// Import controllers and middleware
const { getIndex, getRecipes, getIngredients, getCuisine, getRecipeSharing, getRegister, getAbout } = require("../controllers/homeController.js");
const {submitRecipe} = require("../controllers/recipeController.js");
const {showAddForm, addIngredient} = require("../controllers/ingredientController.js");
const {showAddForm2, addCuisine} = require("../controllers/cuisineController.js");
const{addComment, getCommentsByRecipeId} = require("../controllers/commentController.js");
// Routes
router
    // Home Page
    .get("/", getIndex)

    // Recipes Page
    .get("/recipes", getRecipes)

    // Comment page
    .post('/comments', addComment)
    .get('/recipes/:recipeId/comments', getCommentsByRecipeId)


    // Ingredients Page
    .get("/ingredients", getIngredients)
    .get("/ingredients/add", showAddForm)
    .post("/ingredients/add", addIngredient)

    // Cuisine Page
    .get("/cuisine", getCuisine)
    .get("/cuisine/add", showAddForm2)
    .post("/cuisine/add", addCuisine)

    // Recipe Sharing Page
    .get("/recipe-sharing", getRecipeSharing)
    .post("/submit-recipe", submitRecipe) 

    // Register Page
    .get("/register", getRegister)

    // About Page
    .get("/about", getAbout)


// Export the router
module.exports = router;
