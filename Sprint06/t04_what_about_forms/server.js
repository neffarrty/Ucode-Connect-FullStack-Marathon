const http = require('http');
const path = require('path');
const fs = require('fs');

const host = 'localhost';
const port = 3000;
const answers = {
	'Jumped from the mountain': 'Shame on you! Go and watch Avengers!',
	'Made stone keeper jump from the mountain': 'Shame on you! Go and watch Avengers!',
	'Pushed Gamora of the mountain': 'Correct!',
};

const server = http.createServer((req, res) => {
	if (req.method === 'GET' && req.url === '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    } 
	else if (req.method === 'GET' && req.url === '/script.js') {
        fs.readFile(path.join(__dirname, 'script.js'), (err, content) => {
            res.writeHead(200, { 'Content-Type': 'application/javascript' });
            res.end(content);
        });
    } 
	else if (req.method === 'POST' && req.url === '/check-answer') {
        let body = '';
       
		req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            const { answer } = JSON.parse(body);
            res.end(JSON.stringify({ message: answers[answer] }));
        });
    }
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});