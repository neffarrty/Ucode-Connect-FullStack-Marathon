function removeDuplicates(wrds) {
    for (let word of wrds) {
        if (wrds.indexOf(word) != wrds.lastIndexOf(word)) {
            let index = wrds.lastIndexOf(word);
            wrds.splice(index, 1);
        }
    }

    return wrds.join(' ');
}

function addWords(obj, wrds) {
    let origin = obj.words.trim().split(/\s+/);
    let source = wrds.trim().split(/\s+/);

    for (let word of source) {
        if (!origin.includes(word)) {
            origin.push(word);
        }
    }

    obj.words = removeDuplicates(origin);
}

function removeWords(obj, wrds) {
    let origin = obj.words.trim().split(/\s+/);
    let source = wrds.trim().split(/\s+/);

    for (let word of source) {
        let index = origin.indexOf(word);
        if (index !== -1) {
            origin.splice(index, 1);
        }
    }

    obj.words = removeDuplicates(origin);
}

function changeWords(obj, oldWrds, newWrds) {
    let origin = obj.words.trim().split(/\s+/);
    let change = oldWrds.trim().split(/\s+/);
    let source = newWrds.trim().replace(/\s+/, ' ');

    for (let word of change) {
        let index = origin.indexOf(word);
        if (index !== -1) {
            origin[index] = source;
        }
    }

    obj.words = removeDuplicates(origin);
}

const obj = {
    words: ' newspapers newspapers  books magazines    '
};

console.log(obj); // {words: "newspapers newspapers books magazines"}
addWords(obj, 'radio newspapers ');
console.log(obj); // {words: "newspapers books magazines radio"}
removeWords(obj, 'newspapers radio');
console.log(obj); // {words: "books magazines"}
changeWords(obj, 'books radio magazines', 'tv          internet');
console.log(obj); // {words: "tv internet"}