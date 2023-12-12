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

let list = document.querySelector('#list');

myLibrary.forEach((object) => {
    let book = document.createElement('li');
    book.textContent = `${object.title} by ${object.author} is ${object.pages}
                        pages long. Read Status: ${object.read}.`;
    list.appendChild(book);
});

let newBook = document.querySelector('#new');
let dialogBox = document.querySelector('#dialog');

newBook.addEventListener('click', () => {
    dialogBox.showModal();
});

let submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', (event) => {
    event.preventDefault();
    dialogBox.close();
    let title = document.querySelector('#title');
    let author = document.querySelector('#author');
    let pages = document.querySelector('#pages');
    let read = document.querySelector('#read');
    let unread = document.querySelector('#unread');
    let readOrUnread;
    if (read.checked === true) {
        readOrUnread = true;
    } else if (unread === true) {
        readOrUnread = false;
    }
    let book = new Book(title.value, author.value, pages.value, readOrUnread);
    let entry = document.createElement('li');
    entry.textContent = `${book.title} by ${book.author} is ${book.pages} pages long.
                Read Status: ${book.read}.`;
    list.appendChild(entry);

    console.log(book);
    console.log(entry);

});

// title, author, pages, read, unread