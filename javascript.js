const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.changeStatus = function() {
    if (this.read === true) {
        return this.read = false;
    } else {
        return this.read = true;
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