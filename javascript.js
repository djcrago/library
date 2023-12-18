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
    console.log(title.value, author.value, description.value, pages.value);
    read.forEach((status) => {
        if(status.checked) {
            console.log(status.value);
        };
    });
});