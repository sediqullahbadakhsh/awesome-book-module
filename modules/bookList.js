// Book Class: Represents a Book

function getBooks() {
  let books;
  if (localStorage.getItem('books') === null) {
    books = [];
  } else {
    books = JSON.parse(localStorage.getItem('books'));
  }

  return books;
}

export function addBook(book) {
  const books = getBooks();
  books.push(book);
  localStorage.setItem('books', JSON.stringify(books));
}
export function removeBook(author) {
  const books = getBooks();

  books.forEach((book, index) => {
    if (book.author === author) {
      books.splice(index, 1);
    }
  });

  localStorage.setItem('books', JSON.stringify(books));
}

// UI Class: Handle UI tasks
export class UI {
  static displayBooks() {
    const books = getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td><button type="submit" class="delete">Remove</button></td>
    `;
    list.appendChild(row);
  }

  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
