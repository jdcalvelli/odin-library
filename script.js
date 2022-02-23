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

function addBookToLibrary(title, author, pages, readBool, isDisplayed) {
    const newBook = new Book(title, author, pages, readBool, isDisplayed);
    myLibrary.push(newBook);
}

function displayLibraryContents() {
    myLibrary.forEach((book, index) => {
        if(!book.isDisplayed) {

            let bookCard = document.createElement('div');
            let bookTitle = document.createElement('p');
            let bookAuthor = document.createElement('p');
            let bookPages = document.createElement('p');
            let readBool = document.createElement('p');
            let removeBtn = document.createElement('button');

            bookTitle.textContent = `"${book.title}"`;
            bookAuthor.textContent = book.author;
            bookPages.textContent = book.pages;
            readBool.textContent = book.readBool;
            removeBtn.textContent = 'remove book';

            bookCard.classList.add('book-card');

            bookCard.appendChild(bookTitle);
            bookCard.appendChild(bookAuthor);
            bookCard.appendChild(bookPages);
            bookCard.appendChild(readBool);
            bookCard.appendChild(removeBtn);
        
            document.querySelector('body').appendChild(bookCard);

            book.isDisplayed = true;

            removeBtn.addEventListener('click', () => {
                document.querySelector('body').removeChild(bookCard);
            });
        }
    });
}

document.querySelector('.add-book-btn').addEventListener('click', () => {
    document.querySelector('.add-book-modal').style.display = 'block';
});

document.querySelector('.close-book-modal').addEventListener('click', () => {
    document.querySelector('.add-book-modal').style.display = 'none';
});

document.querySelector('#submit').addEventListener('click', () => {
    
    addBookToLibrary(document.querySelector('#title').value, document.querySelector('#author').value, 
        document.querySelector('#pages').value, document.querySelector('#read').checked, false);
    
    displayLibraryContents();

    document.querySelector('form').reset();
});