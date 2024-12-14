function Book(title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;
    this.info = function() {
        let bookReadStatus = 'not read yet.';
        if (hasRead) {
            bookReadStatus = 'has been read.';
        }
        return `The ${title} by ${author}, ${pages} pages, ${bookReadStatus}`;
    }
}

const theHobbit = new Book('Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(theHobbit.info());

