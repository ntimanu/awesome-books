const form = document.querySelector('form');

  // LOCAL STORAGE
if (localStorage.getItem('Added books') == null) {
    localStorage.setItem('Added books', JSON.stringify([]));
  }
  
const storedData = JSON.parse(localStorage.getItem('Added books'));
  
function updateData() {
    localStorage.setItem('Added books', JSON.stringify(storedData));
  }

// CLASS
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

// CREATE BOOKS
  createBooks(arr) {
  let book = '';
  for (let i = 0; i < arr.length; i += 1) {
    book += `
              <p>${arr[i].title}</p>
              <p>${arr[i].author}</p>
              <button onclick="removeBook(${i})" class="remove-btn">Remove</button>
          `;
  }
  return book;
}
// DISPLAY BOOKS
  showBook() {
    const bookList = document.querySelector('.container');
    bookList.innerHTML = `
            <ul class="book-list">
            ${Books.createBooks(storedData)}
            </ul>
        `;
  }
// ADD NEW BOOK
  addNewdata(bookTitle, bookAuthor) {
    const Book = {
      title: bookTitle,
      author: bookAuthor,
    };
    Books.storedData.push(Book);
    Books.updateData();
    Books.showBook();
  }

  // eslint-disable-next-line no-unused-vars
  removeBook(i) {
    Books.storedData.splice(i, 1);
    Books.updateData();
    Books.showBook();
  }
  submit () {
    form.addEventListener('submit', (e) => {
        const title = document.querySelector('.title');
        const author = document.querySelector('.author');
        e.preventDefault();
        Books.addNewdata(title.value, author.value);
      });
  }
}
// window.onload = Books.showBook();




