import myLibrary from './javascript.js';

export default function createRemoveButton(book) {
  let removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    let index;

    myLibrary.forEach((libraryBook) => {
      if (libraryBook.title === book.title) {
        index = myLibrary.indexOf(book);
      }
    });

    myLibrary.splice(index, 1);
  });

  return removeBtn;
}
