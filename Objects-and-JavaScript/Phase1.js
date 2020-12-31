// Vuochlang Chang
// Phase1: Menu

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
console.log('Name: ', Regina.name, '\n',
  'Ingredients: ', Regina.ingredients, '\n',
  'Prices: ', Regina.prices, '\n\n');

/** Hawaiian */
const ig2 = ['Beef', 'Hams', 'Pineapples'];// ingredients
const price2 = {
  small: 650,
  medium: 850,
  large: 1050,
};// prices in KES
const Hawaiian = new MenuItem('Hawaiian', ig2, price2);// construct Hawaiian in the menu
console.log('Name: ', Hawaiian.name, '\n',
  'Ingredients: ', Hawaiian.ingredients, '\n',
  'Prices: ', Hawaiian.prices, '\n\n');

/** Veggie */
const ig3 = ['Red onions', 'Mixed peppers', 'Mushrooms', 'Black olives', 'Fresh tomatoes'];// ingredients
const price3 = {
  small: 750,
  medium: 950,
  large: 1150,
};// prices in KES
const Veggie = new MenuItem('Veggie', ig3, price3);// construct Veggie in the menu
console.log('Name: ', Veggie.name, '\n',
  'Ingredients: ', Veggie.ingredients, '\n',
  'Prices: ', Veggie.prices, '\n\n');

/** Zzesty Pepperoni Passion */
const ig4 = ['Pepperoni', 'Red chili']; // ignore the "extra mozzerella" and unique sauce
const price4 = {
  small: 750,
  medium: 950,
  large: 1150,
};// prices in KES
// construct Zzesty Pepperoni Passion in the menu
const zzestyPepperoniPassion = new MenuItem('Zzesty Pepperoni Passion', ig4, price4);
console.log('Name: ', zzestyPepperoniPassion.name, '\n',
  'Ingredients: ', zzestyPepperoniPassion.ingredients, '\n',
  'Prices: ', zzestyPepperoniPassion.prices, '\n\n');

/** Chicken Bali */
const ig5 = ['Grilled chicken', 'Pineapples', 'Mushrooms', 'Red chili'];// Chicken Bali ingredients
const price5 = {
  small: 750,
  medium: 950,
  large: 1150,
};// prices in KES
const chickenBali = new MenuItem('Chicken Bali', ig5, price5);// construct Chicken Bali in the menu
console.log('Name: ', chickenBali.name, '\n',
  'Ingredients: ', chickenBali.ingredients, '\n',
  'Prices: ', chickenBali.prices, '\n\n');

/** BBQ Chicken */
const ig6 = ['Grilled chicken', 'Red onions', 'Sweet corn'];// BBQ Chicken ingredients //ignore the unique sauce
const price6 = {
  small: 950,
  medium: 1150,
  large: 1350,
};// prices in KES
const bbqChicken = new MenuItem('BBQ Chicken', ig6, price6);// construct BBQ Chicken in the menu
console.log('Name: ', bbqChicken.name, '\n',
  'Ingredients: ', bbqChicken.ingredients, '\n',
  'Prices: ', bbqChicken.prices, '\n\n');

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
      // loop to go through each ingredients of the item
      for (const eachIngredient in this.menuList[menuItem].ingredients) {
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
menu.addMenuItem('Regina', ig1, price1);// ig# and price# are defined from above for each pizza
menu.addMenuItem('Hawaiian', ig2, price2);
menu.addMenuItem('Veggie', ig3, price3);
menu.addMenuItem('Zzesty Pepperoni Passion', ig4, price4);
menu.addMenuItem('Chicken Bali', ig5, price5);
menu.addMenuItem('BBQ Chicken', ig6, price6);
menu.findMenuItems('Pineapples');
