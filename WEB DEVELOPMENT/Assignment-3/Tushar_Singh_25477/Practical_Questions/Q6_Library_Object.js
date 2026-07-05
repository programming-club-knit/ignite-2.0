const library = {
  books: [
    {
      title: "The Discovery of India",
      author: "Jawaharlal Nehru",
      year: 1946,
      available: true,
    },
    {
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      year: 1999,
      available: true,
    },
    {
      title: "Train to Pakistan",
      author: "Khushwant Singh",
      year: 1956,
      available: false,
    },
  ],

  addBook(title, author, year, available = true) {
    this.books.push({ title, author, year, available });
    console.log(`Added "${title}" to the library.`);
  },

  removeBook(title) {
    const index = this.books.findIndex((book) => book.title === title);
    if (index === -1) {
      console.log(`"${title}" not found in library.`);
      return;
    }
    this.books.splice(index, 1);
    console.log(`Removed "${title}" from the library.`);
  },

  listAvailableBooks() {
    return this.books.filter((book) => book.available);
  },
};

library.addBook("Malgudi Days", "R.K. Narayan", 1943);
library.removeBook("Train to Pakistan");
console.log("Available books:", library.listAvailableBooks());
