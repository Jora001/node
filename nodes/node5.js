const express = require('express');

const app = express();

const bookReviews = [
    { isbn: '9780132350884', review: 'A must-read for any software developer striving for excellence.' },
    { isbn: '9780596007126', review: 'An insightful exploration of JavaScript\'s good and bad parts.' },
    { isbn: '9780132117554', review: 'A comprehensive guide to improving code design through refactoring.' },
    { isbn: '9780321125217', review: 'Offers practical advice and timeless wisdom for programmers.' }
];

app.get('/books/review/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    const review = bookReviews.find(review => review.isbn === isbn);

    if (review) {
        res.json(review);
    } else {
        res.status(404).json({ error: 'Review for the book not found' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
