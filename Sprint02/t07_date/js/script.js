function format(date) {
    return String(date).length === 1 ? '0' + date : date;
}

function getFormattedDate(dateObject) {
    const year    = dateObject.getFullYear();
    const month   = format(dateObject.getMonth() + 1);
    const day     = format(dateObject.getDate());
    const hour    = format(dateObject.getHours());
    const minute  = format(dateObject.getMinutes());
    const weekday = dateObject.toLocaleString("en-US", { weekday: "long" });

    return `${day}.${month}.${year} ${hour}:${minute} ${weekday}`;
}
