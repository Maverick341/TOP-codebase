// let bookCount = 0;
// let bookDisplayCount = 0;

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


function displayLibrary() {
    const libraryContainer = document.querySelector('#library');
    libraryContainer.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Status: ${book.hasRead ? 'Read' : 'Not Read'}</p>
            <button id=${index} class='read-button ${book.isRead ? 'done-reading' : ''}'>${book.isRead ? "DONE READING" : "NOT FINISHED READING"}</button>
            <button id=${index} class='delete-button'> REMOVE THIS BOOK </button>
        `;

        libraryContainer.appendChild(bookCard);
    });
}

function bookForm() {
    const newBookButton = document.querySelector("#new-book-btn");
    const bookDialog = document.querySelector("#book-dialog");
    const bookForm = document.querySelector("#book-form");
    const closeDialogButton = document.querySelector("#close-dialog-btn");

    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const pages = document.querySelector("#pages");
    const hasRead = document.querySelector("#hasRead");

    newBookButton.addEventListener("click", () => {
        bookDialog.showModal();
    });

    closeDialogButton.addEventListener('click', () => {
        bookDialog.close();
    })

    bookForm.addEventListener("submit", (event) => {
        event.preventDefault();

        handleSubmit();
    });

    function handleSubmit() {
        addBookToLibrary(title.value, author.value, pages.value, hasRead.checked);

        displayLibrary();

        bookDialog.close();
    }
}

function removeBook(index) {
    // Logic to remove the book from the library array and update the display
}

function toggleReadStatus(index) {
    // Logic to toggle the read status of the book and update the display
}



// const sampleBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

// // Add the sample book to the array
// myLibrary.push(sampleBook);

// // Call displayLibrary to show the book on the page
// displayLibrary();

// bookForm();