//library array to hold books
let myLibrary = [];

//constructor function for books
function Book(title, author, pages, readBool, isDisplayed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readBool = readBool;
    this.isDisplayed = isDisplayed;
}

function addBookToLibrary(title, author, pages, readBool) {
    const newBook = new Book(title, author, pages, readBool);
    myLibrary.push(newBook);
}

function displayLibraryContents() {
    myLibrary.forEach((book) => {
        if(!book.isDisplayed) {
            let bookDOM = document.createElement('p');
            bookDOM.innerHTML = `${book.title} <br> ${book.author} <br> ${book.pages} <br> ${book.readBool}`;
            document.querySelector('body').appendChild(bookDOM);
            book.isDisplayed = true;
        }
    });
}

document.querySelector('.add-book-btn').addEventListener('click', () => {
    document.querySelector('.add-book-modal').style.display = 'block';
});

document.querySelector('#submit').addEventListener('click', () => {
    
    addBookToLibrary(document.querySelector('#title').value, document.querySelector('#author').value, 
        document.querySelector('#pages').value, document.querySelector('#read').checked, false);
    
    displayLibraryContents();

    document.querySelector('form').reset();
});