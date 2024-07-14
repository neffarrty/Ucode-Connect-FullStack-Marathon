const express = require('express');
const fs = require('fs/promises');

const port = 3000;
const host = 'localhost';
const app = express();

app.get('/file/:filename', (req, res) => {

});

app.post('/file/:filename', (req, res) => {

});

app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
});