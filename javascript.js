const myLibrary = [];

function Book(title, author, description, pages, read) {
    this.title = title;
    this.author = author;
    this.description = description;
    this.pages = pages;
    this.read = Boolean(read);
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}