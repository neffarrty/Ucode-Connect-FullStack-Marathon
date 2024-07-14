const { EatException } = require('./eat-exception');

const Ingestion = class {
    products = [];
    
    constructor(type, id) {
        this.type = type;
        this.id = id;
    }

    setProduct(product) {
        this.products.push(product);
    }

    getProductInfo(name) {
        for (const value of this.products) {
            if (value.name === name) {
                return {
                    name: name,
                    kcal: value.kcal_per_portion,
                };
            }
        }

        return {};
    }

    getFromFridge(name) {
        let product;
        
        for (const value of this.products) {
            if (value.name === name) {
                product = value;
                break;
            }
        }

        if (product.isJunk()) {
            throw new EatException();
        }

        return product;
    }
}

module.exports = { Ingestion };