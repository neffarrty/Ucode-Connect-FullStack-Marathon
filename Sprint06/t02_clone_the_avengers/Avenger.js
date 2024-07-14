const Avenger = class {
    constructor(name, alias, gender, age, powers, hp) {
        this.name = name;
        this.alias = alias;
        this.gender = gender;
        this.age = age;
        this.powers = powers;
        this.hp = hp;
    }

    toString() {
        return [
            `name: ${data.name}`,
            `gender: ${data.gender}`,
            `age: ${data.age}`,
        ].join('\n');
    }
}

module.exports = { Avenger };