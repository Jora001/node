const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let users = [];

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    const existingUser = users.find(user => user.username === username || user.email === email);
    if (existingUser) {
        return res.status(400).json({ error: 'Username or email already exists' });
    }

    const newUser = {
        username,
        email,
        password 
    };

    users.push(newUser);

    res.json({ message: 'User registered successfully', user: newUser });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(user => user.username === username);

    if (!user || user.password !== password) {
        return res.status(401).json({ error: 'Invalid username or password' });
    }

    res.json({ message: 'Login successful', user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
