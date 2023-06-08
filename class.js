const form = document.querySelector('form');

  // LOCAL STORAGE
if (localStorage.getItem('Added books') == null) {
    localStorage.setItem('Added books', JSON.stringify([]));
  }
  
const storedData = JSON.parse(localStorage.getItem('Added books'));
  


// CLASS
class Books {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.data = [];
    this.showBook();
  }

  updateData(bookData) {
    localStorage.setItem('Added books', JSON.stringify(bookData));
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
            ${this.createBooks(storedData)}
            </ul>
        `;
  }
// ADD NEW BOOK
  addNewdata(bookTitle, bookAuthor) {
    const Book = {
      title: bookTitle,
      author: bookAuthor,
    };
    this.data.push(Book);
    this.updateData(this.data);
    this.showBook();
  }

  // eslint-disable-next-line no-unused-vars
  removeBook(i) {
    this.storedData.splice(i, 1);
    this.updateData();
    this.showBook();
  }
  submit () {
    const title = document.querySelector('.title');
    const author = document.querySelector('.author');
    this.addNewdata(title.value, author.value);
    this.createBooks(this.data);
    
  }
}
const newBook = new Books();
form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  newBook.submit();
});
// window.onload = Books.showBook();




