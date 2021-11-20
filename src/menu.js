const foodMenuItems = [
  MenuItem('Pizza', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Pizza', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Pizza', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Pizza', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Pizza', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
];
const drinksMenuItems = [
  MenuItem('Cola', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Cola', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Cola', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Cola', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Cola', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
];

function MenuItem(name, price, description) {
  return { name, price, description }
}

function createMenuHeader() {
  const header = document.createElement('header');
  const h2 = document.createElement('h2');

  h2.textContent = 'Our menu';

  header.classList.add('content-header');
  h2.classList.add('flex-centered');

  header.append(h2);

  return header
}

function toggleMenuCategories(e) {
  if (e.target.dataset.toggled === 'true') return

  const food = document.querySelector('#food');
  const drinks = document.querySelector('#drinks');
  const foodMenu = document.querySelector('#food-menu');
  const drinksMenu = document.querySelector('#drinks-menu');

  food.addEventListener('click', () => {
    food.classList.add('active-menu');
    drinks.classList.remove('active-menu');
    foodMenu.classList.remove('hidden');
    drinksMenu.classList.add('hidden');
  });

  drinks.addEventListener('click', () => {
    food.classList.remove('active-menu');
    drinks.classList.add('active-menu');
    foodMenu.classList.add('hidden');
    drinksMenu.classList.remove('hidden');
  });
}

function createMenuCategories() {
  const menuCategories = document.createElement('div');
  const food = document.createElement('div');
  const drinks = document.createElement('div');

  menuCategories.classList.add('menu-categories');
  food.classList.add('menu-category', 'active-menu');
  drinks.classList.add('menu-category');

  food.dataset.toggled = 'true';
  drinks.dataset.toggled = 'false';

  food.dataset.menu = 'food';
  drinks.dataset.menu = 'drinks';

  food.textContent = 'Food';
  drinks.textContent = 'Drinks';

  [food, drinks].forEach(el => el.addEventListener('click', toggleMenuCategories));

  menuCategories.append(food, drinks);

  return menuCategories
}

function createMenuItems(itemsArr, category, isHidden) {
  const menuItems = document.createElement('div');

  menuItems.classList.add('menu-items', 'flex-column');
  menuItems.id = category;

  for (let item of itemsArr) {
    let menuItem = document.createElement('div');
    let nameWrapper = document.createElement('div');
    let name = document.createElement('h3');
    let price = document.createElement('span');
    let description = document.createElement('p');

    menuItem.classList.add('menu-item');
    nameWrapper.classList.add('menu-item-name');
    price.classList.add('item-price');
    description.classList.add('subtext');

    name.textContent = item.name;
    price.textContent = item.price;
    description.textContent = item.description;

    nameWrapper.append(name, price);
    menuItem.append(nameWrapper, description);

    menuItems.append(menuItem);
  }

  if (isHidden) {
    menuItems.classList.add('hidden');
  }

  return menuItems
}


function createMenu() {
  const menuWrapper = document.createElement('div');
  const menu = document.createElement('div');

  menuWrapper.classList.add('flex-centered');
  menu.classList.add('menu');

  menu.append(
    createMenuCategories(),
    createMenuItems(foodMenuItems, 'food', false),
    createMenuItems(drinksMenuItems, 'drinks', true)
  )
  menuWrapper.append(menu);

  return menuWrapper
}

export default function menu() {
  const article = document.createElement('article');

  article.append(
    createMenuHeader(),
    createMenu()
  );
  return article
}

// const food = document.querySelector('#food');
// const drinks = document.querySelector('#drinks');
// const foodMenu = document.querySelector('#food-menu');
// const drinksMenu = document.querySelector('#drinks-menu');

// food.addEventListener('click', () => {
//   food.classList.add('active-menu');
//   drinks.classList.remove('active-menu');
//   foodMenu.classList.remove('hidden');
//   drinksMenu.classList.add('hidden');
// });

// drinks.addEventListener('click', () => {
//   food.classList.remove('active-menu');
//   drinks.classList.add('active-menu');
//   foodMenu.classList.add('hidden');
//   drinksMenu.classList.remove('hidden');
// });

