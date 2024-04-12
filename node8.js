const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let bookReviews = [
    { isbn: '9780132350884', review: 'A must-read for any software developer striving for excellence.' },
    { isbn: '9780596007126', review: 'An insightful exploration of JavaScript\'s good and bad parts.' },
    { isbn: '9780132117554', review: 'A comprehensive guide to improving code design through refactoring.' },
    { isbn: '9780321125217', review: 'Offers practical advice and timeless wisdom for programmers.' }
];

app.use(bodyParser.json());

app.post('/reviews/:isbn', (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;

    const index = bookReviews.findIndex(item => item.isbn === isbn);

    if (index !== -1) {
        bookReviews[index].review = review;
        res.json({ message: 'Review updated successfully', review: bookReviews[index] });
    } else {
        bookReviews.push({ isbn, review });
        res.json({ message: 'Review added successfully', review: { isbn, review } });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
