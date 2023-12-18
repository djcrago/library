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
    dialog.close();
});



const bookDisplay = document.querySelector('.book-display');

function addBookToDisplay() {
    this.forEach((libraryBook) => {
        let book = document.createElement('div');
        let bookDetails = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let description = document.createElement('p');
        let pages = document.createElement('p');       
        let read = document.createElement('p');
        let removeButton = document.createElement('button');
        book.classList.toggle('book');
        title.textContent = `Title: ${libraryBook.title} `;
        author.textContent = `Author: ${libraryBook.author} `;
        description.textContent = `Description: ${libraryBook.description} `;
        pages.textContent = `Number of Pages: ${libraryBook.pages} `;
        read.textContent = `Read: ${libraryBook.read} `;
        removeButton.textContent = 'Remove';
        bookDetails.appendChild(title);
        bookDetails.appendChild(author);
        bookDetails.appendChild(description);
        bookDetails.appendChild(pages);
        bookDetails.appendChild(read);
        book.appendChild(bookDetails);
        book.appendChild(removeButton);
        removeButton.addEventListener('click', () => {
            bookDisplay.removeChild(book);
        });               
        bookDisplay.appendChild(book);
    });
}



const dialog = document.querySelector('dialog');

const addBookButton = document.querySelector('#add-book-button');

addBookButton.addEventListener('click', () => dialog.showModal());

const cancelButton = document.querySelector('#cancel');

cancelButton.addEventListener('click', () => dialog.close());