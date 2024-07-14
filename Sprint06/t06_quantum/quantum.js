const calculateTime = () => {
    const now = new Date();
    const from = new Date(1939, 0, 1);
    
    const diff = (now.getTime() - from.getTime()) / 7;
    const quantum = new Date(from.getTime() + diff);

    return [
        quantum.getFullYear() - from.getFullYear(),
        quantum.getMonth() - from.getMonth(),
        quantum.getDate() - from.getDate()
    ];
};

module.exports = { calculateTime };