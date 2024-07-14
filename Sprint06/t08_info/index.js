const http = require('http');
const path = require('path');
const process = require('process');
const url = require('url');
const os = require('os');
const ip = require('ip');

const port = 3000;
const host = 'localhost';

const server = http.createServer((req, res) => {
    console.log(`Name of executed script: ${path.basename(__filename)}`);
    console.log(`Arguments passed to the script: ${process.argv}`);
    console.log(`IP address of the server: ${ip.address()}`);
    console.log(`Name of host that invokes the script: ${os.hostname()}`);
    console.log(`Name and a version of the information protocol: HTTP ${req.httpVersion}`);
    console.log(`Query method: ${req.method}`);
    console.log(`User-Agent information: ${req.headers['user-agent']}`);
    console.log(`IP address of the client: ${req.socket.remoteAddress}`);
    console.log(`List of URL parameters: ${JSON.stringify(url.parse(req.url, true).query)}`);
});

server.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}?hero=true&page=1`);
});