class Chef {
  constructor(name, restaurant) {
    this.name = name;
    this.restaurant = restaurant;
  }

  greetCustomer(customerName, isMorning) {
    if (isMorning === true) {
      return `Good morning, ${customerName}!`;
    } else {
      return `Hello, ${customerName}!`;
    }
  }

  checkForFood(foodItem) {
    if (foodItem.name === foodItem.name && foodItem.type === "breakfast") {
      return `Yes, we're serving ${foodItem.name} today!`;
    } else if (foodItem.name !== foodItem.type) {
      return `Sorry, we aren't serving ${foodItem.name} today.`;
    }
  }
};




module.exports = Chef;
