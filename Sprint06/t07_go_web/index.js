const http = require('http');
const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const { normalRouter } = require('./normal-router');
const { quantumRouter } = require('./quantum-router');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/') {
            fs.readFile(path.join(__dirname, 'views/index.ejs'), 'utf-8', (err, data) => {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(ejs.render(data));
            });
        }
        else if (req.url === '/normal') {
            normalRouter(req, res);
        }
        else if (req.url === '/quantum') {
            quantumRouter(req, res);
        }
        else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1 style="text-align: center;">Not Found</h1>');
        }
    }
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});