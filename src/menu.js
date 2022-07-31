function createMenuPage() {
  const content = document.querySelector('.content');
  content.innerHTML = '';

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const item1 = document.createElement('div');
  item1.classList.add('item', 'one');
  const itemDiv1 = document.createElement('div');
  itemDiv1.classList.add('item-div');
  item1.append(itemDiv1);

  const item2 = document.createElement('div');
  item2.classList.add('item', 'two');
  const itemDiv2 = document.createElement('div');
  itemDiv2.classList.add('item-div');
  item2.append(itemDiv2);

  const item3 = document.createElement('div');
  item3.classList.add('item', 'three');
  const itemDiv3 = document.createElement('div');
  itemDiv3.classList.add('item-div');
  item3.append(itemDiv3);

  const item4 = document.createElement('div');
  item4.classList.add('item', 'four');
  const itemDiv4 = document.createElement('div');
  itemDiv4.classList.add('item-div');
  item4.append(itemDiv4);

  const item5 = document.createElement('div');
  item5.classList.add('item', 'five');
  const itemDiv5 = document.createElement('div');
  itemDiv5.classList.add('item-div');
  item5.append(itemDiv5);

  const item6 = document.createElement('div');
  item6.classList.add('item', 'six');
  const itemDiv6 = document.createElement('div');
  itemDiv6.classList.add('item-div');
  item6.append(itemDiv6);

  menuContent.append(item1);
  menuContent.append(item2);
  menuContent.append(item3);
  menuContent.append(item4);
  menuContent.append(item5);
  menuContent.append(item6);

  content.append(menuContent);
}

export { createMenuPage };
