let list = document.querySelector('#list');

let addBook = document.querySelector('#add');
let dialogBox = document.querySelector('#dialog');

let title = document.querySelector('#title');
let author = document.querySelector('#author');
let pages = document.querySelector('#pages');
let read = document.querySelector('#read');
let unread = document.querySelector('#unread');

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

function addBookToLibrary(book) {
    let newBook = document.createElement('li');
    newBook.textContent = `${book.title} by ${book.author} is ${book.pages}
                            pages long. Read Status: ${book.read}.`;
    list.appendChild(newBook);
}

myLibrary.forEach(addBookToLibrary);

addBook.addEventListener('click', () => dialogBox.showModal());

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    let book = new Book(title.value, author.value, pages.value, read.checked);
    addBookToLibrary(book);
    title.value = '';
    author.value = '';
    pages.value = '';
    read.checked = false;
    unread.checked = false;
    dialogBox.close();    
});

cancel.addEventListener('click', () => dialogBox.close());