exports.getAnonymous = (name, alias, affiliation) => {
    const Anonymous = class {
        #name;
        #alias;
        #affiliation;

        constructor(name, alias, affiliation) {
            this.#name = name;
            this.#alias = alias;
            this.#affiliation = affiliation;
        }

        get name() {
            return this.#name;
        }

        set name(value) {
            this.#name = value;
        }

        get alias() {
            return this.#alias;
        }

        set alias(value) {
            this.#alias = value;
        }

        get affiliation() {
            return this.#affiliation;
        }

        set affiliation(value) {
            this.#affiliation = value;
        }
    }
    
    return new Anonymous(name, alias, affiliation);
}