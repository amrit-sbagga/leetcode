/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    const d = new Date(date);
    let sum = 0;
    const days = [31, leap(d.getFullYear()), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    for (let month = 0; month < d.getMonth(); month++) {
        sum += days[month];
    }
    return sum + d.getDate();
};

function leap(year) {
    if ((year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0)) {
        return 29;
    }
    return 28;
}
