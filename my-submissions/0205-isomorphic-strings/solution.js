/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if (s.length !== t.length) return false;

    let mapS = new Map();
    let mapT = new Map();

    for (let i = 0; i < s.length; i++) {
        const charS = s[i]; // e, g, g
        const charT = t[i]; // a, d, d

        if (mapS.has(charS)) {
            if (mapS.get(charS) !== charT) return false;
        } else {
            mapS.set(charS, charT); // ['e': 'a', 'g' : 'd' ]
        }

        if (mapT.has(charT)) {
            if (mapT.get(charT) !== charS) return false;
        } else {
            mapT.set(charT, charS)
        }
    }

    return true;
};





