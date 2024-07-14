exports.firstUpper = (string) => {
    if (typeof string !== 'string') {
        return '';
    }

    let res = string.trim();

    return res.charAt(0).toUpperCase() + res.slice(1).toLowerCase();
}