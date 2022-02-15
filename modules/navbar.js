export default function navSection(navItem) {
  const booklist = document.getElementById('list');
  const addBook = document.getElementById('add');
  const contact = document.getElementById('contact');
  const listLink = document.getElementById('list-link');
  const addLink = document.getElementById('add-link');
  const contactLink = document.getElementById('contact-link');

  if (navItem === 'list-link') {
    booklist.style.visibility = 'visible';
    addBook.style.visibility = 'hidden';
    contact.style.visibility = 'hidden';
    listLink.style.color = 'blue';
    addLink.style.color = 'black';
    contactLink.style.color = 'black';
  } else if (navItem === 'add-link') {
    booklist.style.visibility = 'hidden';
    addBook.style.visibility = 'visible';
    contact.style.visibility = 'hidden';
    listLink.style.color = 'black';
    addLink.style.color = 'blue';
    contactLink.style.color = 'black';
  } else {
    booklist.style.visibility = 'hidden';
    addBook.style.visibility = 'hidden';
    contact.style.visibility = 'visible';
    listLink.style.color = 'black';
    addLink.style.color = 'black';
    contactLink.style.color = 'blue';
  }
}
