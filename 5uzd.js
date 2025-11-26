"use strict";

const library = [
  {
    author: "J.K. Rowling",
    title: "Harry Potter and the Chamber of Secrets",
    readingStatus: true,
  },
  { author: "Homer", title: "The Odyssey", readingStatus: true },
  {
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    readingStatus: false,
  },
];
function readStatus() {
  library.forEach((book) => {
    if (book.readingStatus === true) {
      console.log(`Already read ${book.title} by ${book.author}.`);
    } else {
      console.log(`You still need to read ${book.title} by ${book.author}.`);
    }
  });
}

readStatus();
