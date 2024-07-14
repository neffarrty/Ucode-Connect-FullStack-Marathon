function concat(string1, string2) {
    if (string2 === undefined) {
        let count = 0;

        return function func() {
            func.count = ++count;
            return `${string1} ${prompt("Enter a second string")}`;
        };
    }

    return `${string1} ${string2}`;
}