Object.defineProperty(String.prototype, 'removeDuplicates', {
    value() {
        return this.trim()
				.split(/\s+/)
				.filter((value, index, array) => array.indexOf(value) === index)
				.join(' ');
    }
});

let str = "Giant Spiders? What’s next? Giant Snakes?";
console.log(str);
// Giant Spiders? What’s next? Giant Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = str.removeDuplicates();
console.log(str);
// Giant Spiders? What’s next? Snakes?
str = ". . . . ? . . . . . . . . . . . ";
console.log(str);
// . . . . ? . . . . . . . . . . .
str = str.removeDuplicates();
console.log(str);
// . ?
