//library class declaration
class Library {
    constructor() {
        this.bookShelf = [];
    }

    addBook(Book) {
        this.bookShelf.push(Book);
    }

    displayLibraryContents() {
        this.bookShelf.forEach((Book) => {
            if(!Book.isDisplayed) {
    
                let bookCard = document.createElement('div');
                let bookTitle = document.createElement('p');
                let bookAuthor = document.createElement('p');
                let bookPages = document.createElement('p');
                let bookIsRead = document.createElement('p');
                let removeBtn = document.createElement('button');
                let toggleReadStatus = document.createElement('button');
    
                bookTitle.textContent = `"${Book.title}"`;
                bookAuthor.textContent = Book.author;
                bookPages.textContent = `pages: ${Book.pages}`;
                bookIsRead.textContent = `isRead?: ${Book.isRead}`;
                removeBtn.textContent = 'remove book';
                toggleReadStatus.textContent = 'toggle read status';
    
                bookCard.classList.add('book-card');
    
                bookCard.appendChild(bookTitle);
                bookCard.appendChild(bookAuthor);
                bookCard.appendChild(bookPages);
                bookCard.appendChild(bookIsRead);
                bookCard.appendChild(removeBtn);
                bookCard.appendChild(toggleReadStatus);
    
                document.querySelector('body').appendChild(bookCard);
    
                Book.isDisplayed = true;
    
                removeBtn.addEventListener('click', () => {
                    document.querySelector('body').removeChild(bookCard);
                });
    
                toggleReadStatus.addEventListener('click', () => {
                    Book.toggleIsRead();
                    bookIsRead.textContent = `isRead?: ${Book.isRead}`;
                })
            }
        });
    }
}

//book class declaration
class Book {
    constructor(title, author, pages, isRead, isDisplayed) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        this.isDisplayed = isDisplayed;
    }

    toggleIsRead() {
        this.isRead = !this.isRead;
    }
}

//using eventManager as IIFE to not pollute global space!
const eventsManager = (() => {
    //initialize library
    const myLibrary = new Library();

    //book modal controls
    document.querySelector('.add-book-btn').addEventListener('click', () => {
        document.querySelector('.add-book-modal').style.display = 'block';
    });
    
    document.querySelector('.close-book-modal').addEventListener('click', () => {
        document.querySelector('.add-book-modal').style.display = 'none';
    });

    //submission of new book controls
    document.querySelector('#submit').addEventListener('click', () => {
    
        let bookToAdd = new Book(
            document.querySelector('#title').value, document.querySelector('#author').value, 
            document.querySelector('#pages').value, document.querySelector('#read').checked, false
            );
    
        myLibrary.addBook(bookToAdd);
        myLibrary.displayLibraryContents();
    
        document.querySelector('form').reset();
    });
})()