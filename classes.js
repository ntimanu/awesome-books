const form = document.getElementById('form');
const title = document.getElementById('title');
const author = document.getElementById('author');
const booksContainer = document.getElementById('book-container');

class Books {
  constructor() {
    this.books = [];
    this.getBooks();
    this.data = this.books.length;
  }

  storedData() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  removeBooks(book) {
    booksContainer.innerHTML = '';
    this.books = this.books.filter((item) => item.id !== book.id);
    this.createBook();
    this.storedData();
  }

  createBook() {
    this.books.forEach((book) => {
      const bookElement = document.createElement('div');
      const bookInfo = document.createElement('p');
      const removeBtn = document.createElement('button');
      bookElement.classList.add('book-element');
      bookInfo.innerHTML = `"${book.title}" by ${book.author}`;
      removeBtn.innerHTML = 'remove';
      removeBtn.classList.add('remove-btn');
      removeBtn.addEventListener('click', () => this.removeBooks(book));
      bookElement.appendChild(bookInfo);
      bookElement.appendChild(removeBtn);
      booksContainer.appendChild(bookElement);
    });
  }

  submit() {
    this.books.push({
      title: title.value,
      author: author.value,
      id: this.data,
    });
    this.data += 1;
    booksContainer.innerHTML = '';
    this.createBook();
    this.storedData();
  }

  getBooks() {
    const savedItem = localStorage.getItem('books');
    if (savedItem) {
      this.books = JSON.parse(savedItem);
      this.createBook();
    }
  }
}
const newBook = new Books();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  newBook.submit();
});