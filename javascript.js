const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    changeStatus() {
        if (this.read === true) {
            return this.read = false;
        } else {
            return this.read = true;
        }
    }
}

function addBookToLibrary() {
    let newArrayBook = new Book(title.value, author.value,
    pages.value, read.checked);
    myLibrary.push(newArrayBook);
}

const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

title.addEventListener('input', (event) => {
    if (title.validity.tooShort) {
        title.setCustomValidity('Title must be at least 2 characters long.');
    } else {
        title.setCustomValidity('');
    };
});

author.addEventListener('input', (event) => {
    if (author.validity.tooShort) {
        author.setCustomValidity('Author\'s name must be at least 2 characters long.');
    } else {
        author.setCustomValidity('');
    };
})

pages.addEventListener('input', (event) => {
    pages.setCustomValidity('');
    if (pages.validity.rangeUnderflow) {
        pages.setCustomValidity('Page number cannot be less than 1.');
    } else if (!pages.validity.valid) {
        pages.setCustomValidity('Must enter number of pages.');
    } else {
        pages.setCustomValidity('');
    };
})

function submitForm(event) {
    event.preventDefault();
    addBookToLibrary();
    bookDisplay.textContent = '';
    addBookToDisplay.call(myLibrary);
    dialog.close();
    resetForm();
}

function resetForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
}

form.addEventListener('submit', submitForm);

const bookDisplay = document.querySelector('.book-display');

function addBookToDisplay() {
    myLibrary.forEach((displayBook) => {
        let book = document.createElement('div');
            let title = document.createElement('p');
            let author = document.createElement('p');
            let pages = document.createElement('p');       
            let read = document.createElement('button');
            let removeButton = document.createElement('button');
                title.textContent = `Title: ${displayBook.title} `;
                author.textContent = `Author: ${displayBook.author} `;
                pages.textContent = `Number of Pages: ${displayBook.pages} `;
                read.textContent = readStatus.call(displayBook);
                removeButton.textContent = 'Remove';
                book.classList.toggle('book');
                read.classList.toggle('read-button');
                    read.addEventListener('click', () => {
                        displayBook.changeStatus();
                        read.textContent = readStatus.call(displayBook);
                    });
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
        book.appendChild(title);
        book.appendChild(author);
        book.appendChild(pages);
        book.appendChild(read);
        book.appendChild(removeButton);        
        bookDisplay.appendChild(book);
    });
}

function readStatus() {
    if (this.read === true) {
        return 'Read';
    } else {
        return 'Not Read';
    };    
}

const dialog = document.querySelector('dialog');
const addBookButton = document.querySelector('#add-book-button');
const cancelButton = document.querySelector('#cancel');

addBookButton.addEventListener('click', () => dialog.showModal());

cancelButton.addEventListener('click', () => {
    dialog.close();
    resetForm();
});

