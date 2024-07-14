function checkBrackets(str) {
    if (typeof str !== "string" || !str.match(/[\(\)]/)) {
        return -1;
    }
    
    let openCount = 0;
    let closeCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '(') {
            openCount++;
        } 
        else if (str[i] === ')') {
            if (openCount === 0) {
                closeCount++;
            } 
            else {
                openCount--;
            }
        }
    }

    return openCount + closeCount;
}