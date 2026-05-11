/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let planted = 0;
    const len = flowerbed.length;
    for(let i = 0; i < len; i++){
       if(flowerbed[i] === 0){
         let emptyLeft = (i === 0) || (flowerbed[i-1] === 0);
         let emptyRight = (i == len - 1) || (flowerbed[i+1] === 0)
         if(emptyLeft && emptyRight) {
           flowerbed[i] = 1;
           planted++;
           if(planted >= n) return true;
         }
       }
    }
    return planted >= n;
}

