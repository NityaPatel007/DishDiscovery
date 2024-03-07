const express = require("express");
const router = express.Router();

// Import controllers and middleware
const { getIndex, getRecipes, getIngredients, getRecipeSharing, getRegister, getAbout } = require("../controllers/homeController.js");

// Routes
router
    // Home Page
    .get("/", getIndex)

    // Recipes Page
    .get("/recipes", getRecipes)

    // Ingredients Page
    .get("/ingredients", getIngredients)

    // Recipe Sharing Page
    .get("/recipe-sharing", getRecipeSharing)

    // Register Page
    .get("/register", getRegister)

    // About Page
    .get("/about", getAbout)


// Export the router
module.exports = router;
