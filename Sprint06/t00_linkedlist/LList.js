const { LLData } = require('./LLData');

const LList = class {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    
    getFirst() {
        return this.head;
    }

    getLast() {
        return this.tail;
    }

    add(value) {
        let node = new LLData(value);
   
        if (!this.head) {
            this.head = node;
            this.tail = this.head;
        } 
        else {
           this.tail.next = node;
           this.tail = node;
        }
        this.size++;
    }

    addFromArray(arrayOfData) {
        for (const value of arrayOfData) {
            this.add(value);
        }
    }

    remove(value) {
        if (!this.head) {
            return;
        }

        while (this.head && this.head.value === value) {
            this.head.next;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.value === value) {
                current.next = current.next.next;
            }
           
            current = current.next
        }
    
        if (this.tail.value === value) {
            this.tail = current;
        }
    }

    removeAll(value) {
        while (this.contains(value)) {
            this.remove(value);
        }
    }

    contains(value) {
        for (const data of this) {
            if (data === value) {
                return true;
            }
        }

        return false;
    }

    clear() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    count() {
        return this.size;
    }

    toString() {
        return [...this].toString();
    }

    *getIterator() {
        let current = this.head;
        
        while (current) {
            yield current.data;
            current = current.next;
        }
    }

    [Symbol.iterator]() {
        return this.getIterator();
    }

    filter(callback) {
        let list = new LList();

        for (const data of this) {
            if (callback(data)) {
                list.add(data);
            }
        }

        return list;
    }
}

module.exports = { LList };