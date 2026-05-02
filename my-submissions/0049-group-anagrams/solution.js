/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let map = {};

    for (let str of strs) {

        // let sortedKey = str.split('').sort().join();

        // new sorted key logic
        let countArr = new Array(26).fill(0);
        for(let i = 0; i <  str.length; i++){
           let index = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
           countArr[index]++
        }
        const sortedKey = countArr.join('#');
        // console.log('sortedKey =>', sortedKey);

        if (!map[sortedKey]) {
            map[sortedKey] = [];
        }

        map[sortedKey].push(str);
    }

    // console.log(map);
    return Object.values(map);
};
