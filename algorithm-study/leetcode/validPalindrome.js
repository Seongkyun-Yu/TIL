/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const lowString = s.toLowerCase();
    let newString = "";
    
    for (let i = 0; i < s.length; i++) {
        const asci = lowString.charCodeAt(i);

        if (asci >= 97 && asci <= 122) newString += lowString[i];
        else if (!isNaN(parseInt(lowString[i]))) newString += lowString[i];
        else continue;
    }

    return newString === [...newString].reverse().join('');
};