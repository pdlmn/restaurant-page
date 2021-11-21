const FOOD_MENU_ITEMS = [
  MenuItem('Pizza', '15.50$', 'Delicious whole wheat pizza with vegan cheese and olive toppings.'),
  MenuItem('Pasta', '10.50$', 'Whole wheat pasta with tomato sauce and meaty soy balls.'),
  MenuItem('Carrot Cake', '12.90$', 'Sweet and healthy dessert with date sugar instead of the regular sugar.'),
  MenuItem('Qinoa Salad', '8.00$', 'Salad that is full of vitamins and antioxidants.'),
  MenuItem('Veggie Burger', '10.25$', 'Burger with vegetables, spicy sauce and a veggie pattie.'),
];
const DRINKS_MENU_ITEMS = [
  MenuItem('Green Tea', '5.50$', 'Classic green tea in a teapot.'),
  MenuItem('Hibiskus Tea', '6.00$', 'One of the healthies beverages on the planet. Also called Red Tea.'),
  MenuItem('Orange Juice', '12.00$', 'Freshly squeezed orange juice.'),
  MenuItem('Soy Milkshake', '15.00$', 'Vanilla or espresso flavored soy milkshake.'),
  MenuItem('Water', 'FREE', 'Water.'),
];

function MenuItem(name, price, description) {
  return { name, price, description }
}

function createMenuHeader() {
  const header = document.createElement('header');
  const h2 = document.createElement('h2');

  h2.textContent = 'Our Menu';

  header.classList.add('content-header');
  h2.classList.add('flex-centered');

  header.append(h2);

  return header
}

function toggleMenuCategories(e) {
  if (e.target.dataset.toggled === 'true') return

  const menus = document.querySelectorAll('.menu-items');
  const menuCategories = document.querySelectorAll('.menu-category');

  menus.forEach(menu => menu.classList.toggle('hidden'));
  menuCategories.forEach(category => category.classList.toggle('active-menu'));
  menuCategories.forEach(category => category.dataset.toggled = (category.dataset.toggled === 'true') ? 'false' : 'true');
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
    createMenuItems(FOOD_MENU_ITEMS, 'food', false),
    createMenuItems(DRINKS_MENU_ITEMS, 'drinks', true)
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

