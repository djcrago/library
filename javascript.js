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

function resetForm() {
    title.textContent = '';
    author.textContent = '';
    description.textContent = '';
    pages.textContent = '';
    for(let i = 0; i < read.length; i++) {
        read[i].checked = false;
    }
}

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
    resetForm();
});



const bookDisplay = document.querySelector('.book-display');

function addBookToDisplay() {
    myLibrary.forEach((libraryBook) => {
        let book = document.createElement('div');
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
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(description);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(removeButton);
        removeButton.addEventListener('click', () => {
            bookDisplay.removeChild(book);
            let index = myLibrary.indexOf(title);
            myLibrary.splice(index, 1);
        });               
        bookDisplay.appendChild(book);
    });
}



const dialog = document.querySelector('dialog');

const addBookButton = document.querySelector('#add-book-button');

addBookButton.addEventListener('click', () => dialog.showModal());

const cancelButton = document.querySelector('#cancel');

cancelButton.addEventListener('click', () => dialog.close());