//library array to hold books
let myLibrary = [];

//constructor function for books
function Book(title, author, pages, readBool) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBool = readBool;
}

function addBookToLibrary(title, author, pages, readBool) {
    const newBook = new Book(title, author, pages, readBool);
    myLibrary.push(newBook);
}

function displayLibraryContents() {
    myLibrary.forEach((book) => {
        let bookDOM = document.createElement('p');
        bookDOM.innerHTML = `${book.title} <br> ${book.author} <br> ${book.pages} <br> ${book.readBool}`;
        document.querySelector('body').appendChild(bookDOM);
    });
}