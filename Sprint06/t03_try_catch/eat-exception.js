class EatException extends Error {
    constructor() {
        super('No more junk food, dumpling');
        this.name = this.constructor.name;
    }
}

module.exports = { EatException };