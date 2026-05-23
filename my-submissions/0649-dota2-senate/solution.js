/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function (senate) {

    let radiant = [];
    let dire = [];

    const n = senate.length; // 3

    for (let i = 0; i < n; i++) { // RDD
        if (senate[i] === 'R') {
            radiant.push(i); // [0]
        } else {
            dire.push(i); // [1, 2]
        }
    }

    while (radiant.length > 0 && dire.length > 0) {
        if (radiant[0] < dire[0]) { // 0 < 1 | 3 < 2
            radiant.push(radiant[0] + n); // [0, 3] | [3]
        } else {
            dire.push(dire[0] + n); // [1, 2] | [2, 5]
        }
        radiant.shift(); // [3] | []
        dire.shift(); // [2] | [5]
    }

    console.log(radiant.length);
    return (radiant.length > 0) ? "Radiant" : "Dire";
    
};
