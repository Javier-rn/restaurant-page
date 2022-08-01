function createMenuPage() {
  const content = document.querySelector('.content');
  content.innerHTML = '';

  const menuContent = document.createElement('div');
  menuContent.classList.add('menu-content');

  const item1 = document.createElement('div');
  item1.classList.add('item', 'one');
  const itemDiv1 = document.createElement('div');
  itemDiv1.classList.add('item-div');
  const p1 = document.createElement('p');
  p1.textContent = 'Bread';
  item1.append(itemDiv1);
  item1.append(p1);

  const item2 = document.createElement('div');
  item2.classList.add('item', 'two');
  const itemDiv2 = document.createElement('div');
  itemDiv2.classList.add('item-div');
  const p2 = document.createElement('p');
  p2.textContent = 'Croissants';
  item2.append(itemDiv2);
  item2.append(p2);

  const item3 = document.createElement('div');
  item3.classList.add('item', 'three');
  const itemDiv3 = document.createElement('div');
  itemDiv3.classList.add('item-div');
  const p3 = document.createElement('p');
  p3.textContent = 'Macarons';
  item3.append(itemDiv3);
  item3.append(p3);

  const item4 = document.createElement('div');
  item4.classList.add('item', 'four');
  const itemDiv4 = document.createElement('div');
  itemDiv4.classList.add('item-div');
  const p4 = document.createElement('p');
  p4.textContent = 'Cakes';
  item4.append(itemDiv4);
  item4.append(p4);

  const item5 = document.createElement('div');
  item5.classList.add('item', 'five');
  const itemDiv5 = document.createElement('div');
  itemDiv5.classList.add('item-div');
  const p5 = document.createElement('p');
  p5.textContent = 'Cinnamon Rolls';
  item5.append(itemDiv5);
  item5.append(p5);

  const item6 = document.createElement('div');
  item6.classList.add('item', 'six');
  const itemDiv6 = document.createElement('div');
  itemDiv6.classList.add('item-div');
  const p6 = document.createElement('p');
  p6.textContent = 'Doughnuts';
  item6.append(itemDiv6);
  item6.append(p6);

  menuContent.append(item1);
  menuContent.append(item2);
  menuContent.append(item3);
  menuContent.append(item4);
  menuContent.append(item5);
  menuContent.append(item6);

  content.append(menuContent);
}

export { createMenuPage };
