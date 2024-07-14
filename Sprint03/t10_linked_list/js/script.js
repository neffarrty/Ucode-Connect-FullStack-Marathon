class LinkedList {
	constructor(value = null) {
		this.data = value;
		this.next = null;
	}

	add(value) {
		if (this.data === null) {
			this.data = value;
		}
		else {
			let tmp = this;
			while (tmp.next !== null) {
				tmp = tmp.next;
			}
			tmp.next = new LinkedList(value);
		}
	}

	remove(value) {
		if (this.data === null) {
			return false;
		}

		if (this.data === value) {
			this.data = this.next ? this.next.data : null;
			this.next = this.next ? this.next.next : null;
			return true;
		}

		for (let i = this; i.next !== null; i = i.next) {
			if (i.next.data === value) {
				i.next = i.next.next;
				return true;
			}
		}

		return false;
	}

	contains(value) {
		for(let element of this) {
			if (element === value) {
				return true;
			}
		}

		return false;
	}

	*[Symbol.iterator]() {
		for (let i = this; i !== null; i = i.next) {
			yield i.data;
		}
	}

	clear() {
		this.data = null;
		this.next = null;
	}

	count() {
		let count = 0;
		for (let val of this) {
			count++;
		}
		return count;
	}

	log() {
		console.log([...this].join(', '));
	}
}

function createLinkedList(arr) {
	let list = new LinkedList();

	for(let element of arr) {
		list.add(element);
	}

	return list;
}

const ll = createLinkedList([100, 1, 2, 3, 100, 4, 5, 100]);
ll.log();
// "100, 1, 2, 3, 100, 4, 5, 100"
while(ll.remove(100));
ll.log();
// "1, 2, 3, 4, 5"
ll.add(10);
ll.log();
// "1, 2, 3, 4, 5, 10"
console.log(ll.contains(10));
// "true"
let sum = 0;
for (const n of ll) {
	sum += n;
}
console.log(sum);
// "25"
ll.clear();
ll.log();
// ""