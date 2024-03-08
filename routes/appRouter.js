const express = require("express");
const router = express.Router();

// Import controllers and middleware
const { getIndex, getRecipes, getIngredients, getRecipeSharing, getRegister, getAbout } = require("../controllers/homeController.js");
const {submitRecipe} = require("../controllers/recipeController.js");
const {showAddForm, addIngredient} = require("../controllers/ingredientController.js");
// Routes
router
    // Home Page
    .get("/", getIndex)

    // Recipes Page
    .get("/recipes", getRecipes)

    // Ingredients Page
    .get("/ingredients", getIngredients)
    .get("/ingredients/add", showAddForm)
    .post("/ingredients/add", addIngredient)

    // Recipe Sharing Page
    .get("/recipe-sharing", getRecipeSharing)
    .post("/submit-recipe", submitRecipe) 

    // Register Page
    .get("/register", getRegister)

    // About Page
    .get("/about", getAbout)


// Export the router
module.exports = router;
