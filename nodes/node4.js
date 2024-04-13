const express = require('express');

const app = express();

const books = [
    { isbn: '9780132350884', title: 'Clean Code: A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
    { isbn: '9780596007126', title: 'JavaScript: The Good Parts', author: 'Douglas Crockford' },
    { isbn: '9780132117554', title: 'Refactoring: Improving the Design of Existing Code', author: 'Martin Fowler' },
    { isbn: '9780321125217', title: 'The Pragmatic Programmer: Your Journey to Mastery', author: 'Andrew Hunt, David Thomas' }
];

app.get('/books/title/:title', (req, res) => {
    const title = req.params.title;

    const titleBooks = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));

    if (titleBooks.length > 0) {
        res.json(titleBooks);
    } else {
        res.status(404).json({ error: 'Books with the title not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
