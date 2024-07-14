const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const calculateTime = () => {
    const now = new Date();
    const from = new Date(1939, 0, 1);
    
    const diff = (now.getTime() - from.getTime()) / 7;
    const quantum = new Date(from.getTime() + diff);

    return [
        quantum.getFullYear() - from.getFullYear(),
        quantum.getMonth() - from.getMonth(),
        quantum.getDate() - from.getDate()
    ];
};

const quantumRouter = (req, res) => {
    fs.readFile(path.join(__dirname, 'views/quantum.ejs'), 'utf-8', (err, data) => {
        const time = calculateTime();
        
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(ejs.render(data, {
            years: time[0],
            months: time[1],
            days: time[2],
        }));
    });
}

module.exports = { quantumRouter };