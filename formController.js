import myLibrary from './javascript.js';
import { createNewBook } from './javascript.js';
import createBookElement from './createBookElement.js';
import createRemoveButton from './createRemoveButton.js';

const form = document.querySelector('form');
const addBookBtn = document.querySelector('#add-book');
const cancelBtn = document.querySelector('#cancel');
const dialog = document.querySelector('dialog');

const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

const bookDisplay = document.querySelector('.book-display');

export default function formController() {
  form.addEventListener('submit', submitForm);

  addBookBtn.addEventListener('click', () => dialog.showModal());

  cancelBtn.addEventListener('click', () => {
    dialog.close();
    resetForm();
  });
}

function submitForm(event) {
  event.preventDefault();

  createNewBook(title.value, author.value, pages.value, read.checked);

  bookDisplay.textContent = '';
  addBookToDisplay(myLibrary);

  dialog.close();
  resetForm();
}

function addBookToDisplay(library) {
  library.forEach((libraryBook) => {
    const bookElement = createBookElement(libraryBook);

    const removeBtn = createRemoveButton(libraryBook);
    removeBtn.addEventListener('click', () => {
      bookDisplay.removeChild(bookElement);
    });
    bookElement.appendChild(removeBtn);

    bookDisplay.appendChild(bookElement);
  });
}

function resetForm() {
  title.value = '';
  author.value = '';
  pages.value = '';
  read.checked = false;
}
