const express = require('express');
const session = require('express-session');
const bcrypt = require('bcrypt');
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
    if (req.session.password) {
        res.redirect('/info');
    }
    else {
        res.type('html').status(200);
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.post('/save', async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(Number(req.body.salt));
        const hash = await bcrypt.hash(req.body.password, salt);

        req.session.password = hash;
        res.redirect('/guess');
    }
    catch (error) {
        res.type('html').status(500);
        res.send('<h1 style="text-align: center;">Internal server error</h1>');
    }
});

app.get('/guess', (req, res) => {
    if (req.session.password) {
        res.type('html').status(200);
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
                <head>
                    <meta charset="utf-8">
                    <title>Hack it!</title>
                    <meta name="description" content="t01. Hack it!">
                    <style>
                        input {
                            margin: 3px 0px;
                        }
                    </style>
                </head>
                <body>
                    <h1>Password</h1>
                    <form action="/guess" method="POST">
                        <div>Password saved at session</div>
                        <div>Hash is ${req.session.password}</div>
                        <label>Try to guess
                            <input type="text" name="password" placeholder="Password to session">
                        </label>
                        <input type="submit" value="Check password">
                        <br>
                        <input type="submit" value="Save">
                    </form>
                </body>
            </html>
        `);
    }
});

app.post('/guess', async (req, res) => {
    if (req.session.password) {
        const res = await bcrypt.compare(req.body.password, req.session.password);

        if (res) {
            console.log('guessed!');
        }
        else {
            console.log('you are a piece of shit!');
        }
    }
});

app.get('/clear', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});