////////////////////////////// nameMenuItem ////////////////////////////////////

function nameMenuItem(food) {
  return 'Delicious ' + food;
};


////////////////////////////// CreateMenuItem //////////////////////////////////

function createMenuItem(name, price, type) {
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem;
};

////////////////////////////// addIngredients //////////////////////////////////

function addIngredients(ingredient, ingredients) {
  for (var i = 0; i < ingredients.length; i++) {
    if (ingredient === ingredients[i]) {
      return;
    }
  }
  return ingredients.push(ingredient);
};

////////////////////////////// formatPrice /////////////////////////////////////

function formatPrice(menuItem) {
  return '$' + menuItem;
};

////////////////////////////// decreasePrice ///////////////////////////////////

function decreasePrice(menuItem) {
  return menuItem * .9;
};

////////////////////////////// createRecipe ///////////////////////////////////

function createRecipe(title, ingredients, type) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: type
  }
  return recipe;
};


module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
