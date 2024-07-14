const fs = require('fs');
const path = require('path');

module.exports = class FileList {
    constructor() {
        try {
            fs.accessSync('tmp');
        }
        catch(err) {
            fs.mkdirSync('tmp');
        }
    }

    getList() {
        return fs.readdirSync('tmp');
    }

    hasFiles() {
        return this.getList().length > 0;
    }

    getHTMLList() {
        const list = this.getList().map(file => {
            return `<li><a href="/file?file=${file}">${file}</a></li>`;
        });
        
        return `<ul>${list}</ul>`;
    }
};