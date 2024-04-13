const express = require('express');

const app = express();

app.get('/books', (req, res) => {
    const books = [
        { id: 1, title: 'Book 1', author: 'Author 1' },
        { id: 2, title: 'Book 2', author: 'Author 2' },
        { id: 3, title: 'Book 3', author: 'Author 3' }
    ];

    res.json(books);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
