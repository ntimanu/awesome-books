if (localStorage.getItem('Added books') == null) {
  localStorage.setItem('Added books', JSON.stringify([]));
}

const storedData = JSON.parse(localStorage.getItem('Added books'));

function updateData() {
  localStorage.setItem('Added books', JSON.stringify(storedData));
}

const form = document.querySelector('form');
function createBooks(arr) {
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
function showBook() {
  const bookList = document.querySelector('.container');
  bookList.innerHTML = `
          <ul class="book-list">
          ${createBooks(storedData)}
          </ul>
      `;
}

function addNewdata(bookTitle, bookAuthor) {
  const Book = {
    title: bookTitle,
    author: bookAuthor,
  };
  storedData.push(Book);
  updateData();
  showBook();
}

form.addEventListener('submit', (e) => {
  const title = document.querySelector('.title');
  const author = document.querySelector('.author');
  e.preventDefault();
  addNewdata(title.value, author.value);
});
// eslint-disable-next-line no-unused-vars
function removeBook(i) {
  storedData.splice(i, 1);
  updateData();
  showBook();
}

window.onload = showBook();
