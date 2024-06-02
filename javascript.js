import formController from './formController.js';

const myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  changeStatus() {
    return (this.read = !this.read);
  }
}

function createNewBook(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

formController();

export default myLibrary;
export { createNewBook };
