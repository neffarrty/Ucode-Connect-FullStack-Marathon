describe("checkBrackets", () => {
    const correct = [
        { str: ")",expected: 1 },
        { str: "()", expected: 0 },
        { str: "())", expected: 1 },
        { str: "(()", expected: 1 },
        { str: "(())", expected: 0 },
        { str: "(())))(", expected: 3 },
        { str: "(10 - 3) * 2) - (5", expected: 2 },
        { str: "))))((((", expected: 8 },
        { str: "(2 * (2 - 3) - 3) + sin(30))", expected: 1 }
    ];

    const incorrect = [
        { str: "2 + 2", expected: -1 },
        { str: "", expected: -1 },
        { str: NaN, expected: -1 },
        { str: { str: "()" }, expected: -1 },
        { str: null, expected: -1 }
    ];
    
    function makeTest(str, expected) {
        it(`'${str}' is missing ${expected} brackets`, () => {
            chai.assert.equal(checkBrackets(str), expected);
        });
    }
    
    describe("correct values tests", () => {
        for (let value of correct) {
            makeTest(value.str, value.expected);
        }
    });

    describe("incorrect values tests", () => {
        for (let value of incorrect) {
            makeTest(value.str, value.expected);
        }
    });
});