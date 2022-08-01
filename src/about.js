function createAboutPage() {
  const content = document.querySelector('.content');
  content.innerHTML = '';

  const aboutDiv = document.createElement('div');
  aboutDiv.classList.add('about-div');

  const leftSideDiv = document.createElement('div');
  leftSideDiv.classList.add('left-side-about');

  const p1 = document.createElement('p');
  p1.textContent = 'We are a wonderful bakery located in the center of Metropolis.';
  const span1 = document.createElement('span');
  span1.id = 'span-1';

  const p2 = document.createElement('p');
  p2.textContent =
    "Our way of doing things involves some magic. But don't worry! It's completely safe.";

  leftSideDiv.append(p1);
  leftSideDiv.append(span1);
  leftSideDiv.append(p2);

  const rightSideDiv = document.createElement('div');
  rightSideDiv.classList.add('right-side-about');

  const span2 = document.createElement('span');
  span2.id = 'span-2';

  const p3 = document.createElement('p');
  p3.textContent =
    'If you come, you might even encounter yourself surrounded by mysterious and marvelous fantastical creatures!';
  const span3 = document.createElement('span');
  span3.id = 'span-3';

  rightSideDiv.append(span2);
  rightSideDiv.append(p3);
  rightSideDiv.append(span3);

  aboutDiv.append(leftSideDiv);
  aboutDiv.append(rightSideDiv);

  content.append(aboutDiv);
}

export { createAboutPage };
