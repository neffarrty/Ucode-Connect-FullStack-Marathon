const fs = require('fs');
const path = require('path');

module.exports = class File {
    constructor(name) {
        try {
            fs.accessSync('tmp');
        }
        catch(err) {
            fs.mkdirSync('tmp');
        }

        this.name = path.join('tmp', name);
    }

    create() {
        try {
            fs.openSync(this.name);
        }
        catch(err) {
            console.log(err.message);
        }
    }

    delete() {
        try {
            fs.unlinkSync(this.name);
        }
        catch(err) {
            console.log(err.message);
        }
    }

    read() {
        try {
            return fs.readFileSync(this.name, { encoding: 'utf-8' });
        }
        catch(err) {
            console.log(err.message);
        }
    }

    write(data) {
        try {
            fs.appendFileSync(this.name, data, { encoding: 'utf-8' });
        }
        catch(err) {
            console.log(err.message);
        }
    }
};