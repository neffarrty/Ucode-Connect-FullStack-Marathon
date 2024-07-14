const Product = class {
    constructor(name, kcal_per_portion) {
        this.name = name;
        this.kcal_per_portion = kcal_per_portion;
    }

    isJunk() {
        return this.kcal_per_portion > 200;
    }
}

module.exports = { Product };