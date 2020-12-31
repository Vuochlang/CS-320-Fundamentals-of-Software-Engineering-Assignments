// Name: Vuochlang Chang
// Phase 3: Inventory

/** CLASS: MenuItem */
class MenuItem {
  constructor(name, ingredients, prices) {
    this.name = name;
    this.ingredients = ingredients;
    this.prices = prices;
  }
}

/** Regina */
const ig1 = ['Beef', 'Hams', 'Mushrooms'];// ingredients
const price1 = {
  small: 650,
  medium: 850,
  large: 1050,
};// prices in KES
const Regina = new MenuItem('Regina', ig1, price1);// construct Regina in the menu
console.log('Name: ', Regina.name,
  '\nIngredients: ', Regina.ingredients,
  '\nPrices: ', Regina.prices, '\n\n');

/** Hawaiian */
const ig2 = ['Beef', 'Hams', 'Pineapples'];// ingredients
const price2 = {
  small: 650,
  medium: 850,
  large: 1050,
};// prices in KES
const Hawaiian = new MenuItem('Hawaiian', ig2, price2);// construct Hawaiian in the menu
console.log('Name: ', Hawaiian.name,
  '\nIngredients: ', Hawaiian.ingredients,
  '\nPrices: ', Hawaiian.prices, '\n\n');

/** Veggie */
const ig3 = ['Red onions', 'Mixed peppers', 'Mushrooms', 'Black olives', 'Fresh tomatoes'];// ingredients
const price3 = {
  small: 750,
  medium: 950,
  large: 1150,
};// prices in KES
const Veggie = new MenuItem('Veggie', ig3, price3);// construct Veggie in the menu
console.log('Name: ', Veggie.name,
  '\nIngredients: ', Veggie.ingredients,
  '\nPrices: ', Veggie.prices, '\n\n');

/** Zzesty Pepperoni Passion */
const ig4 = ['Pepperoni', 'Red chili']; // ignore the "extra mozzerella" and unique sauce
const price4 = {
  small: 750,
  medium: 950,
  large: 1150,
};// prices in KES
// construct Zzesty Pepperoni Passion in the menu
const zzestyPepperoniPassion = new MenuItem('Zzesty Pepperoni Passion', ig4, price4);
console.log('Name: ', zzestyPepperoniPassion.name,
  '\nIngredients: ', zzestyPepperoniPassion.ingredients,
  '\nPrices: ', zzestyPepperoniPassion.prices, '\n\n');

/** Chicken Bali */
const ig5 = ['Grilled chicken', 'Pineapples', 'Mushrooms', 'Red chili'];// Chicken Bali ingredients
const price5 = {
  small: 750,
  medium: 950,
  large: 1150,
};// prices in KES
const chickenBali = new MenuItem('Chicken Bali', ig5, price5);// construct Chicken Bali in the menu
console.log('Name: ', chickenBali.name,
  '\nIngredients: ', chickenBali.ingredients,
  '\nPrices: ', chickenBali.prices, '\n\n');

/** BBQ Chicken */
const ig6 = ['Grilled chicken', 'Red onions', 'Sweet corn'];// BBQ Chicken ingredients //ignore the unique sauce
const price6 = {
  small: 950,
  medium: 1150,
  large: 1350,
};// prices in KES
const bbqChicken = new MenuItem('BBQ Chicken', ig6, price6);// construct BBQ Chicken in the menu
console.log('Name: ', bbqChicken.name,
  '\nIngredients: ', bbqChicken.ingredients,
  '\nPrices: ', bbqChicken.prices, '\n\n');

/** CLASS: Menu */
class Menu {
  constructor() {
    this.menuList = [];
  }

  addMenuItem(name, ingredients, prices) {
    const newItem = new MenuItem(name, ingredients, prices);
    this.menuList.push(newItem);// add the new item to the list
    return newItem;
  }

  findMenuItems(ingredient) {
    const pizza = [];
    for (const menuItem in this.menuList) { // loop to go through each item in the menu
      for (const eachIngredient in this.menuList[menuItem].ingredients) {
        // loop to go through each ingredients of the item
        if (this.menuList[menuItem].ingredients[eachIngredient] === ingredient) {
          pizza.push(this.menuList[menuItem].name);
        }
      }
    }
    console.log(`Pizza that has '${ingredient}' included ${pizza}`);
  }
}

/** Phase 1: Step 5
 * Create an instance of the Menu class, add the 6 MenuItem instances to it,
 * and use the findMenuItems() method to find the items which are made with pineapples
 */
const menu = new Menu();
menu.addMenuItem('Regina', ig1, price1);
menu.addMenuItem('Hawaiian', ig2, price2);
menu.addMenuItem('Veggie', ig3, price3);
menu.addMenuItem('Zzesty Pepperoni Passion', ig4, price4);
menu.addMenuItem('Chicken Bali', ig5, price5);
menu.addMenuItem('BBQ Chicken', ig6, price6);
menu.findMenuItems('Pineapples');
console.log();

/** CLASS: Pizza */
class Pizza {
  constructor(menuItem, size, crust) {
    this.MenuItem = menuItem;
    this.size = size;
    this.crust = crust;
  }
}

/** CLASS: Order */
class Order {
  constructor() {
    this.orderList = [];
  }

  addPizza(menuItem, size, crust) {
    const newOrder = new Pizza();
    newOrder.MenuItem = menuItem;
    newOrder.size = size;
    newOrder.crust = crust;
    this.orderList.push(newOrder);
  }

  totalCost() {
    let cost = 0;
    const size = this.orderList.length;
    for (const eachPizza in this.orderList) {
      for (const ourMenu in menu.menuList) {
        const pizzaSize = this.orderList[eachPizza].size;
        if (this.orderList[eachPizza].MenuItem.name === menu.menuList[ourMenu].name) {
          if (pizzaSize === 'medium') {
            cost += menu.menuList[ourMenu].prices.medium;
          }
          if (pizzaSize === 'large') {
            cost += menu.menuList[ourMenu].prices.large;
          }
          if (pizzaSize === 'small') {
            cost += menu.menuList[ourMenu].prices.small;
          }
        }
      }
    }
    console.log('***************************************');
    console.log('SUMMARY OF THE ORDER: ');
    for (let i = 0; i < size; i++) {
      console.log(`---- Pizza${i + 1}----\nName:`, this.orderList[i].MenuItem.name, ', Size:', this.orderList[i].size,
        ', Crust:', this.orderList[i].crust);
    }
    console.log(`-------TOTAL COST= ${cost}-------`);
    console.log('***************************************');
  }
}

/** Phase 2: Step 4
 * Exercise the Order class by creating an instance, adding at least two pizzas,
 * and checking if the total cost is correct
 */
const myOrder = new Order();
myOrder.addPizza(bbqChicken, 'medium', 'Hand Tossed');
myOrder.addPizza(Hawaiian, 'large', 'Thin');
myOrder.addPizza(zzestyPepperoniPassion, 'large', 'Thin');
myOrder.totalCost();

/** CLASS: Inventory */
class Inventory {
  constructor() {
    this.stock = {
      Beef: 20,
      Hams: 20,
      Mushrooms: 20,
      Pineapples: 20,
      'Red onions': 40,
      'Mixed peppers': 40,
      'Black olives': 30,
      'Fresh tomatoes': 40,
      Pepperoni: 2,
      'Red chili': 2,
      'Grilled chicken': 1,
      'Sweet corn': 10,
    };
  }
}

/** CLASS: Store */
class Store {
  constructor() {
    this.s1 = 1;// small serving
    this.s2 = 2;// medium serving
    this.s3 = 3;// large serving
    this.inventory = new Inventory();
  }

  checkInventory(ingredient, size) {
    let amount;
    const numberOfIngredients = ingredient.length;
    if (size === 'small') amount = this.s1;
    if (size === 'medium') amount = this.s2;
    if (size === 'large') amount = this.s3;

    for (let i = 0; i < numberOfIngredients; i++) { // loop to go through each ingredients of the pizza
      for (const eachItem in this.inventory.stock) { // loop to go through each ingredients in the Inventory
        if (ingredient[i] === eachItem) {
          if (this.inventory.stock[eachItem] < amount) {
            return false;// when the ingredient in the Inventory is not enough (< amount needed) to make the pizza
          }
          this.inventory.stock[eachItem] -= amount;
        }
      }
    }
    return true;
  }

  checkLeftOver() {
    console.log('\nInventory: ', this.inventory.stock);// print out the left over ingredients in the Inventory
  }
}

/** this function will accept the instance of order and the store
 * it will call the checkInventory method to check the availability of the ingredients
 * it will display the name of the pizza that has made
 * @param myOrderInstance
 * @param storeInstance
 */
function placeOrder(myOrderInstance, storeInstance) {
  const orders = myOrderInstance.orderList.length;
  const pizza = [];

  for (let i = 0; i < orders; i++) { // loop to go through each pizza in the order
    const { size } = myOrderInstance.orderList[i];// get the size of the pizza[i]
    const ingredientNeed = [];
    const numberIngredient = myOrderInstance.orderList[i].MenuItem.ingredients.length;// get #ingredients of pizza[i]

    for (let j = 0; j < numberIngredient; j++) { // loop to create a list of ingredients from the given order instance
      ingredientNeed.push(myOrderInstance.orderList[i].MenuItem.ingredients[j]);
    }
    const makePizza = storeInstance.checkInventory(ingredientNeed, size);// return true or false based on ingredients
    if (makePizza === true) {
      pizza.push(myOrderInstance.orderList[i].MenuItem.name);
    }
  }
  console.log('\nPizza that can be made are: ', pizza);
  // storeInstance.checkLeftOver();//print out the left over pizza
}

/** Phase3, Step6:
 * Call the placeOrder method with the instance of the order you did at the end of Phase 2.
 * One of these pizzas should have enough ingredients to be made, and the other not.
 * Have the result of the placeOrder call print to the console.
 */
const store = new Store();
placeOrder(myOrder, store);
