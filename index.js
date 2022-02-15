import navSection from './modules/navbar.js';
import startTime from './modules/startTime.js';
import UI from './modules/bookList.js';
import Book from './modules/bookClass.js';
import Library from './modules/library.js';

startTime();

// Nav link
navSection('list-link');
const navList = ['list-link', 'add-link', 'contact-link'];
navList.forEach((element) => {
  const display = document.getElementById(`${element}`);
  display.addEventListener('click', () => {
    navSection(element);
  });
});

// Events: Display Books

document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const book = new Book(title, author);

  if (title === '' || author === '') {
    alert('Title and Author fields must be filled out');
    return false;
  }
  UI.addBookToList(book);
  UI.clearFields();
  Library.addBook(book);
  return true;
});

// Event: Remove A Book

document.querySelector('#book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Library.removeBook(e.target.parentElement.previousElementSibling.textContent);
});
