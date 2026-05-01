/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    // let i = 0, j = 0;
    // while(i < s.length && j < t.length) {
    //    if(s[i] === t[j]){
    //       i++;
    //    }
    //    j++;
    // }

    let subs = 0;
    for(let i = 0; i < t.length; i++){
      if(s[subs] === t[i]){
        subs++;
      }
    }


    return subs === s.length;
};

