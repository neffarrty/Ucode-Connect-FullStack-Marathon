export class HardWorker {
	get name() {
		return this._name; 
	}

	set name(value) {
		this._name = value; 
	}

	get age() {
		return this._age; 
	}

	set age(value) {
		if (value < 1 || value > 99) {
			return;
		}
		this._age = value; 
	}

	get salary() {
		return this._salary; 
	}

	set salary(value) {
		if (value < 100 || value > 9999) {
			return;
		}

		this._salary = value; 
	}

	toObject() {
		return {
			name: this.name,
			age: this.age,
			salary: this.salary,
		};
	}
}