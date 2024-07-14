function* generator() {
	let prev = 1;

	while (true) {
		let value = prev + +prompt(`Previous result: ${prev}. Enter a new number:`);
		
		if (Number.isNaN(value)) {
			console.error('Invalid number!');
		}
		else {
			prev = value > 10000 ? 1 : value;
		}

		yield prev;
	}
}
