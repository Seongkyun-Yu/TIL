/**
 * https://leetcode.com/problems/reformat-phone-number/
 * @param {string} number
 * @return {string}
 */
 var reformatNumber = function(number) {
    let numArr = [];
    for(let i = 0; i < number.length; i++) {
        if (!Number.isNaN(+number[i]) && number[i] !== " ") numArr.push(number[i]);
    }

    let res = '';
    while(numArr.length >= 4) {
        numArr.length == 4 ? 
            res += numArr.splice(0,2).join('') +'-'+numArr.splice(0,2).join('') : 
            res += numArr.splice(0,3).join('') + '-';
    }
    
    res += numArr.join('');
    
    return res;
};