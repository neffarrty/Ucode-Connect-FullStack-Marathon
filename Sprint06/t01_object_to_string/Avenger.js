const Avenger = function(data) {
    const Avenger = () => ([
        data.alias.toUpperCase(),
        data.powers.join('\n')
    ]).join('\n');

    Avenger.toString = () => [
        `name: ${data.name}`,
        `gender: ${data.gender}`,
        `age: ${data.age}`,
    ].join('\n');

    return Avenger;
}

module.exports = { Avenger };