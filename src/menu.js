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

