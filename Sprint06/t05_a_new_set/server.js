const http = require('http');
const path = require('path');
const fs = require('fs');
const formidable = require('formidable');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET':
            if (req.url === '/') {
                fs.readFile(path.join(__dirname, 'index.html'), 'utf-8', (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'text/html' });
                    res.end(data);
                });
            }
            if (req.url === '/style.css') {
                fs.readFile(path.join(__dirname, 'style.css'), 'utf-8', (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'text/css' });
                    res.end(data);
                });
            }
            if (req.url === '/script.js') {
                fs.readFile(path.join(__dirname, 'script.js'), 'utf-8', (err, data) => {
                    res.writeHead(200, { 'Content-Type': 'application/javascript' });
                    res.end(data);
                });
            }
            break;
        case 'POST':
            const form = new formidable.IncomingForm();

            form.parse(req, (err, fields, files) => {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                res.end(`POST
                    [name] => ${fields.name}
                    [email] => ${fields.email}
                    [age] => ${fields.age}
                    [description] => ${fields.description}
                    [photo] => ${path.basename(fields.photo[0])}
                `);
            });
            break;
    }
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});