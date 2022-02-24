/**
 * https://leetcode.com/problems/lemonade-change/
 * @param {number[]} bills
 * @return {boolean}
 */
 var lemonadeChange = function(bills) {
    let five = 0;
    let ten = 0;
    
    for(const bill of bills) {
        if (bill === 5) { 
            five++; 
            continue 
        }
        if (bill === 10) { 
            five--; ten++ 
        }
        if (bill === 20) { 
            if (ten) {
                ten--;
                five--;
            }
            else five -= 3 
        }
        if (five < 0) return false
    }
    return true
};