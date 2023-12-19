const myLibrary = [];

function Book(title, author, description, pages, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let readStatus;
    read.forEach((status) => {
        if(status.checked) {
            readStatus = status.value;
        };
    });
    let newArrayBook = new Book(title.value, author.value, description.value, 
    pages.value, readStatus);
    myLibrary.push(newArrayBook);
}



const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const description = document.querySelector('#description');
const pages = document.querySelector('#pages');
const read = document.querySelectorAll('.read');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
    bookDisplay.textContent = '';
    addBookToDisplay.call(myLibrary);
    dialog.close();
    resetForm();
});

function resetForm() {
    title.value = '';
    author.value = '';
    description.value = '';
    pages.value = '';
    for(let i = 0; i < read.length; i++) {
        read[i].checked = false;
    };
}



const bookDisplay = document.querySelector('.book-display');

function addBookToDisplay() {
    myLibrary.forEach((displayBook) => {
        let book = document.createElement('div');
        let title = document.createElement('p');
        let author = document.createElement('p');
        let description = document.createElement('p');
        let pages = document.createElement('p');       
        let read = document.createElement('p');
        let removeButton = document.createElement('button');
        let statusButton = document.createElement('button');
        book.classList.toggle('book');
        title.textContent = `Title: ${displayBook.title} `;
        author.textContent = `Author: ${displayBook.author} `;
        description.textContent = `Description: ${displayBook.description} `;
        pages.textContent = `Number of Pages: ${displayBook.pages} `;
        read.textContent = `Read: ${displayBook.read} `;
        removeButton.textContent = 'Remove';
        statusButton.textContent = 'Change read status'
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(description);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(removeButton);
        book.appendChild(statusButton);
        removeButton.addEventListener('click', () => {
            let index;
            myLibrary.forEach((arrayBook) => {
                if (displayBook.title === arrayBook.title) {
                    index = myLibrary.indexOf(arrayBook);
                }
            });
            myLibrary.splice(index, 1);
            bookDisplay.removeChild(book);
        });
        statusButton.addEventListener('click', () => {
            if (displayBook.read === 'Yes') {
                displayBook.read = 'No';
            } else {
                displayBook.read = 'Yes';
            }
            read.textContent = `Read: ${displayBook.read}`;
        });
        bookDisplay.appendChild(book);
    });
}



const dialog = document.querySelector('dialog');

const addBookButton = document.querySelector('#add-book-button');

addBookButton.addEventListener('click', () => dialog.showModal());

const cancelButton = document.querySelector('#cancel');

cancelButton.addEventListener('click', () => {
    dialog.close();
    resetForm();
});