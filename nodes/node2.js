const express = require('express');

const app = express();

const books = [
    { isbn: '9780132350884', title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
    { isbn: '9780596007126', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { isbn: '9780132117554', title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler' }
];

app.get('/books/:isbn', (req, res) => {
    // Retrieve the ISBN parameter from the request
    const isbn = req.params.isbn;

    const book = books.find(book => book.isbn === isbn);

    if (book) {
        res.json(book);
    } else {
        res.status(404).json({ error: 'Book not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
