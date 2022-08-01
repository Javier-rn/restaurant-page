import './reset.css';
import './style.css';

import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createAboutPage } from './about.js';

createHomePage();

const headline = document.querySelector('.headline');
const menuButton = document.querySelector('#menu-button');
const aboutButton = document.querySelector('#about-button');

headline.addEventListener('click', createHomePage);
menuButton.addEventListener('click', createMenuPage);
aboutButton.addEventListener('click', createAboutPage);
