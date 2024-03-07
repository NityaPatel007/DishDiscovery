function getIndex(req, res) {
    res.render('pages/index', { title: 'Index' });
}

function getRecipes(req, res) {
    res.render('pages/recipes', { title: 'Recipes' });
}

function getIngredients(req, res) {
    res.render('pages/ingredients', { title: 'Ingredients' });
}

function getRecipeSharing(req, res) {
    res.render('pages/recipe-sharing', { title: 'Recipe Sharing' });
}

function getRegister(req, res) {
    res.render('pages/register', { title: 'Register' });
}

function getAbout(req, res) {
    res.render('pages/about', { title: 'About' });
}

module.exports = {
    getIndex,
    getRecipes,
    getIngredients,
    getRecipeSharing,
    getRegister,
    getAbout
};
