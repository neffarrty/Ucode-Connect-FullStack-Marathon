let number = 1488;
let bigint = BigInt(93882900498293294n);
let string = "I Am Iron Man."
let bool = true;
let nil = null;
let undef = undefined;
let object = { 
    name: "Steve", 
    surname: "Rogers" 
};
let symbol = Symbol("thanos");
let func =  () => { return "I am Groot!"; };

alert(`number is ${typeof number}\n` +
        `bigint is ${typeof bigint}\n` +
        `string is ${typeof string}\n` +
        `bool is ${typeof bool}\n` +
        `nil is ${typeof nil}\n` +
        `undef is ${typeof undef}\n` +
        `object is ${typeof object}\n` +
        `symbol is ${typeof symbol}\n` +
        `func is ${typeof func}`
);