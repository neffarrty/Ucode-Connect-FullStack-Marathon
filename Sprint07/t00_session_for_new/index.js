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
    if (req.session.heroInfo) {
        res.redirect('/info');
    }
    else {
        res.type('html').status(200);
        res.sendFile(path.join(__dirname, 'index.html'));
    }
});

app.get('/info', (req, res) => {
    const info = req.session.heroInfo;

    if (info) {
        res.type('html').status(200);
        res.send(`
            <h1>Session for new</h1>
            <form action="/forget" method="POST" style="width: fit-content;">
                <div style="padding: 0px 0px 20px 20px;">
                    <div>name: ${info.name}</div>
                    <div>alias: ${info.alias}</div>
                    <div>age: ${info.age}</div>
                    <div>description: ${info.about}</div>
                    <div>photo: ${info.photo}</div>
                    <div>experience: ${Object.keys(info).filter(key => key.endsWith('power')).length}</div>
                    <div>level: ${info.control}</div>
                    <div>publicity: ${info.publicity}</div>
                </div>
                <fieldset>
                    <input type="submit" value="FORGET">
                </fieldset>
            </form>
        `);
    }
    else {
        res.type('html').status(500);
        res.send('<h1 style="text-align: center;">Internal server error</h1>');
    }
});

app.post('/info', (req, res) => {
    req.session.heroInfo = req.body;
    req.session.save();
    res.redirect('/info');
});

app.post('/forget', (req, res) => {
    req.session.destroy(() => res.redirect('/'));
});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});