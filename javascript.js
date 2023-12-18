const myLibrary = [];

function Book(title, author, description, pages, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}



const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const description = document.querySelector('#description');
const pages = document.querySelector('#pages');
const read = document.querySelectorAll('.read');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let readStatus;
    read.forEach((status) => {
        if(status.checked) {
            readStatus = status.value;
        };
    });
    let newBook = new Book(title.value, author.value, description.value, 
    pages.value, readStatus);
    myLibrary.push(newBook);
    bookDisplay.textContent = '';
    addBookToDisplay.call(myLibrary);
});



const bookDisplay = document.querySelector('.book-display');

function addBookToDisplay() {
    this.forEach((libraryBook) => {
        let book = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let description = document.createElement('p');
        let pages = document.createElement('p');       
        let read = document.createElement('p'); 
        book.classList.toggle('book');
        title.textContent = `Title: ${libraryBook.title} `;
        author.textContent = `Author: ${libraryBook.author} `;
        description.textContent = `Description: ${libraryBook.description} `;
        pages.textContent = `Number of Pages: ${libraryBook.pages} `;
        read.textContent = `Read: ${libraryBook.read} `;
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(description);
        book.appendChild(pages);
        book.appendChild(read);
        bookDisplay.appendChild(book);
    });
}



const dialog = document.querySelector('dialog');

const addBookButton = document.querySelector('#add-book-button');

addBookButton.addEventListener('click', () => dialog.showModal());

const cancelButton = document.querySelector('#cancel');

cancelButton.addEventListener('click', () => dialog.close());