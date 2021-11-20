import './styles/index.css';
import './styles/home.css';
import './styles/menu.css';
import './styles/utils.css';
import home from './home.js';
import menu from './menu.js';

const content = document.querySelector('#content');
// content.append(home());
content.append(menu());
