import './styles/index.css';
import './styles/menu.css';
import './styles/contact.css';
import './styles/utils.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const content = document.querySelector('#content');
const navItems = document.querySelectorAll('[data-page]');
const pages = { home, menu, contact };

content.append(home());

function changePage(e) {
  const page = e.target.dataset.page;
  if (!(page in pages)) return

  content.innerHTML = '';
  content.append(pages[page]());
}

window.addEventListener('click', e => {
  if (e.target.dataset.page) changePage(e);
})

