/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function (n) {
    
    // return n.toLocaleString('de-DE');
    
    let num = String(n);
    let res = '';
    let needPoint = 0;

    for (let i = num.length - 1; i >= 0; i--) {
        if (needPoint === 3) {
            res += '.' + num[i];
            needPoint = 1;
            continue;
        }
        res += num[i];
        needPoint++;
    }
    return res.split('').reverse().join('')
};
