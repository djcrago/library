let list = document.querySelector('#list');

let addBook = document.querySelector('#add');
let dialogBox = document.querySelector('#dialog');

let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');

let textInputs = [
    title,
    author,
    pages,
];

let read = document.querySelector('#read');
let unread = document.querySelector('#unread');

let radioInputs = [
    read,
    unread,
];

let submitButton = document.querySelector('#submit');
let cancel = document.querySelector('#cancel');

const myLibrary = [
    {
        title: 'The Meaning of Marriage',
        author: 'Timothy Keller',
        pages: 352,
        read: true,
    },
    {
        title: 'Range',
        author: 'David Epstein',
        pages: 368,
        read: true,
    },
    {
        title: 'Wild at Heart',
        author: 'John Eldredge',
        pages: 222,
        read: false,
    },
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    let book = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(book);
}

function displayBook(book) {
    let bookContainer = document.createElement('div');
        bookContainer.classList.toggle('container');
        let newBook = document.createElement('li');
            let title = document.createElement('p');
                title.textContent = `Title: ${book.title}`;
            newBook.appendChild(title);
            let author = document.createElement('p');
                author.textContent = `Author: ${book.author}`;
            newBook.appendChild(author);
            let pages = document.createElement('p');
                pages.textContent = `Number of Pages: ${book.pages}`;
            newBook.appendChild(pages);
        bookContainer.appendChild(newBook);
        let statusBtn = document.createElement('button');
            statusBtn.classList.toggle('status');
            statusBtn.textContent = `Read: ${book.read}`;
            statusBtn.addEventListener('click', () => {
                statusBtn.textContent = `Read: ${!book.read}`;            
                book.read = !book.read;
            });
        bookContainer.appendChild(statusBtn)    
        let deleteBtn = document.createElement('button');
            deleteBtn.classList.toggle('delete');
            deleteBtn.textContent = 'Delete';
            deleteBtn.addEventListener('click', () => {
                list.removeChild(bookContainer);
                let deletedBook = myLibrary.indexOf(book);
                myLibrary.splice(deletedBook, 1);
            });
        bookContainer.appendChild(deleteBtn);
    list.appendChild(bookContainer);
}

function resetForm() {
    textInputs.forEach((input) => input.value = '');
    radioInputs.forEach((input) => input.checked = false);
}

myLibrary.forEach(displayBook);

addBook.addEventListener('click', () => dialogBox.showModal());

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
    list.textContent = '';
    myLibrary.forEach(displayBook);
    resetForm();
    dialogBox.close();    
});

cancel.addEventListener('click', () => dialogBox.close());