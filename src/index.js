import './styles/index.css';
import './styles/menu.css';
import './styles/contact.css';
import './styles/utils.css';
import home from './js/home.js';
import menu from './js/menu.js';
import contact from './js/contact.js';

const content = document.querySelector('#content');
const navItems = document.querySelectorAll('.nav-item');
const pages = { home, menu, contact };

content.append(home());

function changePage(e) {
  const page = e.target.dataset.page;
  if (!(page in pages)) return

  content.innerHTML = '';
  content.append(pages[page]());
}

function highlightActivePage(e) {
  navItems.forEach(el => el.classList.remove('nav-item-active'))
  e.target.classList.add('nav-item-active');
}

window.addEventListener('click', e => {
  if (e.target.dataset.page) changePage(e);
  if (e.target.classList.contains('nav-item')) {
    highlightActivePage(e);
  }
});

