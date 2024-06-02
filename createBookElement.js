export default function createBookElement(libraryBook) {
  let bookElement = document.createElement('div');
  bookElement.classList.toggle('book');

  let title = document.createElement('p');
  title.textContent = libraryBook.title;
  bookElement.appendChild(title);

  let author = document.createElement('p');
  author.textContent = `Author: ${libraryBook.author} `;
  bookElement.appendChild(author);

  let pages = document.createElement('p');
  pages.textContent = `Number of Pages: ${libraryBook.pages} `;
  bookElement.appendChild(pages);

  let read = document.createElement('button');
  read.textContent = readStatus(libraryBook.read);
  read.addEventListener('click', () => {
    libraryBook.changeStatus();
    read.textContent = readStatus(libraryBook.read);
  });
  bookElement.appendChild(read);

  return bookElement;
}

function readStatus(status) {
  if (status === true) {
    return 'Read';
  } else {
    return 'Not Read';
  }
}
