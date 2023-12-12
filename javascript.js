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

let list = document.querySelector('#list');

myLibrary.forEach((object) => {
    let book = document.createElement('li');
    book.textContent = `${object.title} by ${object.author} is 
                        ${object.pages} long. Read Status: ${object.read}.`;
    list.appendChild(book);
});

let newBook = document.querySelector('#new');
let dialogBox = document.querySelector('#dialog');

newBook.addEventListener('click', () => {
    dialogBox.showModal();
});

let submitButton = document.querySelector('#submit');

submitButton.addEventListener('click', () => {
    dialogBox.close();
});