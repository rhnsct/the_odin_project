class Book {
  constructor(title, author, numPages, read) {
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.read = read ? "have read" : "not read yet";
  }
}

function addNewBook() {
  let newBook = new Book();
}

Book.prototype.info = function () {
  return `${this.title} by ${this.author}, ${this.numPages}, ${this.read}`;
};

let theHobbit = new Book("The Hobbit", "J.R.R Tolkien", "295 Pages", false);

console.log(theHobbit.info());
