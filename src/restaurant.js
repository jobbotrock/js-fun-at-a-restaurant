////////////////////////////// createRestaurant ////////////////////////////////

function createRestaurant(name) {
  var restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant
}

////////////////////////////// addMenuItems ////////////////////////////////////


function addMenuItem(name, menuItem) {
  if (menuItem.type === 'breakfast') {
    for (var i = 0; i < name.menus.breakfast.length; i++) {
      if (menuItem.name === name.menus.breakfast[i].name) {
        return;
      }
    }
    name.menus.breakfast.push(menuItem);
  } else if (menuItem.type === 'lunch') {
    for (var i = 0; i < name.menus.lunch.length; i++) {
      if (menuItem.name === name.menus.lunch[i].name) {
        return;
      }
    }
    name.menus.lunch.push(menuItem);
  } else if (menuItem.type === 'dinner') {
     for (var i = 0; i < name.menus.dinner.length; i++) {
       if (menuItem.name === name.menus.dinner[i].name) {
         return;
       }
     }
    name.menus.dinner.push(menuItem);
  }
};

function removeMenuItem(name, menuItem, mealType) {
  if (mealType === undefined) {
    return `Sorry, we don't sell ${menuItem}, try adding a new recipe!`
  }
  if (mealType === 'breakfast') {
    name.menus.breakfast.pop();
    return `No one is eating our ${menuItem} \- it has been removed from the breakfast menu!`;
  } else if (mealType === 'lunch') {
    name.menus.lunch.pop();
    return `No one is eating our ${menuItem} \- it has been removed from the lunch menu!`;
  } else if (mealType === 'dinner') {
    name.menus.dinner.pop();
    return `No one is eating our ${menuItem} \- it has been removed from the dinner menu!`
  }
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
