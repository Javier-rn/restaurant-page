function createMenuPage() {
  const content = document.querySelector('.content');
  content.innerHTML = '';

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

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const item1 = document.createElement('div');
  item1.classList.add('item');
  const item2 = document.createElement('div');
  item2.classList.add('item');
  const item3 = document.createElement('div');
  item3.classList.add('item');
  const item4 = document.createElement('div');
  item4.classList.add('item');
  const item5 = document.createElement('div');
  item5.classList.add('item');
  const item6 = document.createElement('div');
  item6.classList.add('item');

  menuContent.append(item1);
  menuContent.append(item2);
  menuContent.append(item3);
  menuContent.append(item4);
  menuContent.append(item5);
  menuContent.append(item6);

  content.append(menuContent);
}

export { createMenuPage };
