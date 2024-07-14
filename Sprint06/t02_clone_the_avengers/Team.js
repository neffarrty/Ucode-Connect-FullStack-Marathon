const Team = class {
    constructor(id, avengers) {
        this.id = id;
        this.avengers = [...avengers];
    }

    clone() {
        return new Team(this.id, this.avengers);
    }

    battle(damage) {
        for (const avenger of this.avengers) {
            avenger.hp -= damage.damage;
        }

        this.avengers = this.avengers.filter(a => a.hp > 0);
    }

    calculateLosses(clonedTeam) {
        const loses = clonedTeam.avengers.length - this.avengers.length;

        if (loses === 0) {
            console.log("We haven't lost anyone in this battle!");
        }
        else {
            console.log(`In this battle we lost ${loses} Avengers.`);
        }
    }
}

module.exports = { Team };