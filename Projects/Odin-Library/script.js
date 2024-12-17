const libraryContainer = document.querySelector('#library');

const newBookButton = document.querySelector("#new-book-btn");
const bookDialog = document.querySelector("#book-dialog");
const addBookForm = document.querySelector("#book-form");
const closeDialogButton = document.querySelector("#close-dialog-btn");

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const hasRead = document.querySelector("#hasRead");

const noBook = document.querySelector('.no-books');

const myLibrary = [];

function Book(title, author, pages, hasRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.toggleReadStatus = function () {
    this.hasRead = !this.hasRead;
};

function addBookToLibrary(title, author, pages, hasRead) {
    const curBook = new Book(title, author, pages, hasRead);
    myLibrary.push(curBook);
}

addBookToLibrary("Star Wars: A New Hope", "George Lucas", 1, true);
addBookToLibrary("Indiana Jones and the Last Crusade", "Rob MacGregor", 1, false);
addBookToLibrary("Spider-Man: The Ultimate Guide", "Tom DeFalco", 1, true);
addBookToLibrary("One Piece: East Blue Saga", "Eiichiro Oda", 1130, true);
addBookToLibrary("Dragon Ball: The Complete Illustrations", "Akira Toriyama", 519, false);

function displayLibrary() {
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.hasRead ? 'Read' : 'Not Read'}</p>
            <button id=${index} class='read-status-button ${book.hasRead ? 'done-reading' : ''}'>${book.hasRead ? "DONE READING" : "NOT FINISHED READING"}</button>
            <button id=${index} class='button-delete'> REMOVE THIS BOOK </button>
        `;

        libraryContainer.appendChild(bookCard);
    });

    if (libraryContainer.childElementCount != 0) {
        noBook.style.display = 'none';
    } else {
        noBook.style.display = 'flex';
    }

    const readBooks = document.getElementsByClassName('read-status-button');
    Array.from(readBooks).forEach(readBook => {
        readBook.addEventListener('click', () => {
            myLibrary[readBook.id].toggleReadStatus();
            displayLibrary();
        })
    });

    const removeBooks = document.getElementsByClassName('button-delete');
    Array.from(removeBooks).forEach(removeBook => {
        removeBook.addEventListener('click', () => {
            const index = removeBook.getAttribute('data-index');
            myLibrary.splice(index, 1);
            displayLibrary();
        })
    });
}

function bookForm() {
    newBookButton.addEventListener("click", () => {
        bookDialog.showModal();
        // document.body.classList.add('modal-open');
    });

    closeDialogButton.addEventListener('click', () => {
        bookDialog.close();
        // document.body.classList.remove('modal-open');
    })

    addBookForm.addEventListener("submit", (event) => {
        event.preventDefault();

        handleSubmit();
    });

    function handleSubmit() {
        addBookToLibrary(title.value, author.value, pages.value, hasRead.checked);

        displayLibrary();

        bookDialog.close();
        // document.body.classList.remove('modal-open'); 
    }
}

bookForm();

displayLibrary();