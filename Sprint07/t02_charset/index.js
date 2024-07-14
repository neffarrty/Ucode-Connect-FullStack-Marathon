const express = require('express');
const session = require('express-session');
const path = require('path');

const port = 3000;
const host = 'localhost';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: 'neffarrty',
        saveUninitialized: true,
        resave: true,
    })
);

app.get('/', (req, res) => {
    res.type('html').status(200);
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/script.js', (req, res) => {
    res.type('text/javascript').status(200);
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.post('/', (req, res) => {
    const charsets = req.body.charsets;
    const result = [{ 
        charset: 'Input string',
        string: req.body.input,
    }];

    for (const charset of req.body.charsets) {
        result.push({ charset: charset, string: req.body.input });
    }

    res.status(200).json(result);
});

app.get('/clear', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});