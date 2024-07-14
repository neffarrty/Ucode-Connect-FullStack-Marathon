const calculateTime = () => {
    const now = new Date();
    const from = new Date(1939, 0, 1);
    
    return {
        years() {
            return now.getFullYear() - from.getFullYear();
        },
        months() {
            return now.getMonth() - from.getMonth();
        },
        days() {
            return now.getDate() - from.getDate();
        },
    };
};

module.exports = { calculateTime };