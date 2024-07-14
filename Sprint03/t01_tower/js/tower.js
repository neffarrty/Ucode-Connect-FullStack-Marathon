class Building {
    constructor(floors, material, address) {
        this.floors = floors;
        this.material = material;
        this.address = address;
    }

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
        ].join('\n');
    }
};

class Tower extends Building {
	get hasElevator() {
		return this._hasElevator; 
	}

	set hasElevator(value) {
		this._hasElevator = value; 
	}

	get arcCapacity() {
		return this._arcCapacity; 
	}

	set arcCapacity(value) {
		this._arcCapacity = value; 
	}

	get height() {
		return this._height; 
	}

	set height(value) {
		this._height = value; 
	}

	getFloorHeight() {
		return this.height / this.floors;
	}

    toString() {
        return [
            `Floors: ${this.floors}`,
            `Material: ${this.material}`,
            `Address: ${this.address}`,
			`Elevator: ${this.hasElevator ? '+' : '-'}`,
			`Arc reactor capacity: ${this.arcCapacity}`,
			`Height: ${this.height}`,
			`Floor height: ${this.getFloorHeight()}`,
        ].join('\n');
    }
}

const starkTower = new Tower(93, 'Different', 'Manhattan, NY');
starkTower.hasElevator = true;
starkTower.arcCapacity = 70;
starkTower.height = 1130;
console.log(starkTower.toString());
