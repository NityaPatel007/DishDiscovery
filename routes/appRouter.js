const express = require("express");
const router = express.Router();
const { getIndex, getRecipes, getIngredients, getCuisine, getRecipeSharing, getAbout, getRegister, getLogin } = require("../controllers/homeController.js");
const { submitRecipe } = require("../controllers/recipeController.js");
const { showAddForm, addIngredient } = require("../controllers/ingredientController.js");
const { showAddForm2, addCuisine } = require("../controllers/cuisineController.js");
const { addComment, getCommentsByRecipeId } = require("../controllers/commentController.js");
const { registerUser, loginUser } = require("../controllers/userController.js");

router
    // Home Page
    .get("/", (req, res) => {
        // Check if user is logged in
        if (req.session.isLoggedIn) {
            // If user is already logged in, redirect to the index page
            res.redirect("/home");
        } else {
            // If not logged in, redirect to the login page
            res.redirect("/login");
        }
    })

    // Recipes Page
    .get("/home", getIndex) // Renamed route to "/home"

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

    // About Page
    .get("/about", getAbout)

    // Register and Login
    .get("/register", getRegister)
    .post("/register", registerUser)
    .get("/login", getLogin)
    .post("/login", loginUser);
    
// Export the router
module.exports = router;
