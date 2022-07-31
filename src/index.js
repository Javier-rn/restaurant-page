import './reset.css';
import './style.css';

import { createHomePage } from './home.js';
import { createMenuPage } from './menu.js';
import { createContactPage } from './contact.js';

createHomePage();

const headline = document.querySelector('.headline');
const menuButton = document.querySelector('#menu-button');
const contactButton = document.querySelector('#contact-button');

headline.addEventListener('click', createHomePage);
menuButton.addEventListener('click', createMenuPage);
contactButton.addEventListener('click', createContactPage);
