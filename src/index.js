import './reset.css';
import './style.css';

import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';

createHomePage();

const menuButton = document.querySelector('#menu-button');

menuButton.addEventListener('click', createMenuPage);
