/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function (date) {
    var dateArray = date.split(' ');
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const year = dateArray[2];
    let month = parseInt(months.indexOf(dateArray[1])) + 1; 
    month = month < 10 ? "0" + month : month;
    const day = parseInt(dateArray[0]) < 10 ? "0" + parseInt(dateArray[0]) : parseInt(dateArray[0]);
    console.log(parseInt(months.indexOf(dateArray[1])), month, day);
    return `${year}-${month}-${day}`
};
