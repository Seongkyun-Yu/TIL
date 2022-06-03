/**
 * https://leetcode.com/problems/can-place-flowers/
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
 var canPlaceFlowers = function(flowerbed, n) {
    let count = n;
    
    for(let i = 0; i < flowerbed.length; i++) {
        if (!flowerbed[i] && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            flowerbed[i] = 1;
            count--;
            i++;
        }
    }
    
    return count <= 0;
};