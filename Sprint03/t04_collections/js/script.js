// --- GUEST LIST ---

const guests = [
	{ name: 'Steve Rogers' },
	{ name: 'Natasha Romanoff' },
	{ name: 'Tony Stark' },
	{ name: 'Thor' },
	{ name: 'Bruce Banner' }
];

let guestList = new WeakSet();

for (const guest of guests) {
	guestList.add(guest);
}

console.log(`Guest list has '${guests[2].name}': ${guestList.has(guests[2])}`);
console.log(guestList.delete(guests[2]));
console.log(`Guest list has '${guests[2].name}': ${guestList.has(guests[2])}`);
console.log(`Guest list size: ${guestList.size}`);

// --- MENU ---

const dishes = [
	{ name: 'Bolognese', price: 13.99 },
	{ name: 'Pasta Alfredo', price: 12.49 },
	{ name: 'Caesar Salad', price: 8.99 },
	{ name: 'Pizza', price: 11.99 },
	{ name: 'Coka-Cola', price: 2.99 },
	{ name: 'Caesar Salad', price: 8.99 },
];

let menu = new Map();

for (let item of dishes) {
	menu.set(item.name, item.price);
}

console.log('\nMenu items:\n');
for (let [key, value] of menu) {
	console.log(`${key} - price: $${value}`);
}

// --- BANK VAULT ---

const boxes = [
	{ 
		credential: { id: '1488' },
		content: { 
			owner: 'Steve Rogers', 
			money: 1500,
		},
	},
	{ 
		credential: { id: '7777' },
		content: { 
			owner: 'Thor', 
			money: 0.0,
		},
	},
	{ 
		credential: { id: '0911' },
		content: { 
			owner: 'Tony Stark', 
			money: 10579500000.0,
		},
	},
	{ 
		credential: { id: '1488' },
		content: { 
			owner: 'Natasha Romanoff', 
			money: 1500.0,
		},
	},
	{ 
		credential: { id: '0207' },
		content: { 
			owner: 'Bruce Banner', 
			money: 23350.50,
		},
	},
];

let bankVault = new WeakMap();

for (let box of boxes) {
	bankVault.set(box.credential, box.content);
}

console.log('\nBank vault:\n');
for (const box of boxes) {
	let account = bankVault.get(box.credential);
	console.log(`Account:\nOwner: ${account.owner}\nMoney: ${account.money}`);
}

// --- COIN COLECTION ---

const coins = [
	"denarius",
	"guilder",
	"florin",
	"ducat",
	"solidus"
];

let collection = new Set();

for (let coin of coins) {
	collection.add(coin);
}

console.log(`\nCoin collection: ${[...collection].join(', ')}`);
console.log(`Coin collection size: ${collection.size}`);
console.log(`Coin collection has 'ducat': ${collection.has('ducat')}`);
console.log(`Coin collection has 'penny': ${collection.has('penny')}`);

collection.delete('florin');

console.log(`\nCoin collection: ${[...collection].join(', ')}`);
