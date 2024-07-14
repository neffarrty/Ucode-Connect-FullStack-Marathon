function checkDivision(beginRange, endRange) {
    for (let i = beginRange; i <= endRange; i++) {
        let description = "";
        
        if (i % 2 === 0) {
            description += " is even";
        }
        if (i % 3 === 0) {
            description += (description.length > 0 ? "," : "") + " a multiple of 3";
        }
        if (i % 10 === 0) {
            description += (description.length > 0 ? "," : "") + " a multiple of 10";
        }
        description = i + (description.length === 0 ? " -" : description);

        console.log(description);
    }
}

var begin = +prompt("Enter the beginning of the range:", "1");
var end   = +prompt("Enter the end of the range:", "100");

checkDivision(begin, end);

