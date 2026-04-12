/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    let time1 = new Date(date1);
    let time2 = new Date(date2);
    const diffInMs = Math.abs(time1 - time2)
    const msInADay = 1000*60*60*24;
    return Math.round(diffInMs/msInADay);
};
