exports.checkDivision = (a = 1, b = 60) => {
    for (let i = a; i <= b; i++) {
        const dividers = [];

        if (i % 2 === 0) {
            dividers.push('is divisible by 2');
        }
        if (i % 3 === 0) {
            dividers.push('is divisible by 3');
        }
        if (i % 10 === 0) {
            dividers.push('is divisible by 10');
        }

        console.log(`The number ${i} ${dividers.length === 0 ? '-' : dividers.join(', ')}`);
    }
}