let bookCount = 0;
let bookDisplayCount = 0;

const myLibrary = [];

function Book(title, author, pages, hasRead = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
}

Book.prototype.toggleReadStatus = function() {
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
        `;

        libraryContainer.appendChild(bookCard);
    });
}




const sampleBook = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180, true);

// Add the sample book to the array
myLibrary.push(sampleBook);

// Call displayLibrary to show the book on the page
displayLibrary();