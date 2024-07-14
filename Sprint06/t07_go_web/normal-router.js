const path = require('path');
const ejs = require('ejs');
const fs = require('fs');

const calculateTime = () => {
    const now = new Date();
    const from = new Date(1939, 0, 1);
    
    return {
        years() {
            return now.getFullYear() - from.getFullYear();
        },
        months() {
            return now.getMonth() - from.getMonth();
        },
        days() {
            return now.getDate() - from.getDate();
        },
    };
};

const normalRouter = (req, res) => {
    fs.readFile(path.join(__dirname, 'views/normal.ejs'), 'utf-8', (err, data) => {
        const time = calculateTime();

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(ejs.render(data, {
            years: time.years(),
            months: time.months(),
            days: time.days(),
        }));
    });
}

module.exports = { normalRouter };