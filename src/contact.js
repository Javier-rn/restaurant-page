function createContactPage() {
  const content = document.querySelector('.content');
  content.innerHTML = '';

  const contactDiv = document.createElement('div');
  contactDiv.classList.add('contact-div');

  content.append(contactDiv);
}

export { createContactPage };
