function createHomePage() {
  const content = document.querySelector('.content');

  const nav = document.createElement('nav');

  const menuButton = document.createElement('button');
  menuButton.innerText = 'Menu';

  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');

  const circleDiv = document.createElement('div');
  circleDiv.classList.add('circle');

  const h1 = document.createElement('h1');
  h1.innerText = "Flodin's Bakery";

  const contactButton = document.createElement('button');
  contactButton.innerText = 'Contact';

  headlineDiv.append(circleDiv);
  headlineDiv.append(h1);

  nav.append(menuButton);
  nav.append(headlineDiv);
  nav.append(contactButton);

  content.append(nav);

  const mainContentDiv = document.createElement('div');
  mainContentDiv.classList.add('main-content');

  const leftBox1 = document.createElement('div');
  leftBox1.classList.add('left', 'box');

  const leftBox2 = document.createElement('div');
  leftBox2.classList.add('right', 'box');

  const leftBox3 = document.createElement('div');
  leftBox3.classList.add('left', 'box');

  const p1 = document.createElement('p');
  p1.innerText =
    'Taste our freshly baked bread, made with the best quality flour in the world.';

  const p2 = document.createElement('p');
  p2.innerText = 'Our cakes will tranport to your childhood immediately.';

  const p3 = document.createElement('p');
  p3.innerText = 'We even make pizzas! Not italian, but close!';

  leftBox1.append(p1);
  leftBox2.append(p2);
  leftBox3.append(p3);

  mainContentDiv.append(leftBox1);
  mainContentDiv.append(leftBox2);
  mainContentDiv.append(leftBox3);

  content.append(mainContentDiv);
}

export { createHomePage };
