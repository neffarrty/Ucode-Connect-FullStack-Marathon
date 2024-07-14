const StrFrequency = class {
    constructor(str) {
        this.str = str;
    }

    letterFrequencies() {
        const res = {};
        const letters = this.str.toUpperCase().split('').filter(l => l.match(/[A-Z]/));

        for (const letter of letters) {
            if (letter in res) {
                res[letter]++;
            }
            else {
                res[letter] = 1;
            }
        }

        return res;
    }

    wordFrequencies() {
        const res = {};

        if (!this.str) {
            res[''] = 1;
            return res;
        }

        const words = this.str.trim().toUpperCase().split(/[^A-Z]/).filter(Boolean);

        for (const word of words) {
            if (word in res) {
                res[word]++;
            }
            else {
                res[word] = 1;
            }
        }

        return res;
    }

    reverseString() {
        return this.str.split('').reverse().join('');
    }
}

module.exports = StrFrequency;