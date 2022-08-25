/**
 * @param {number[]} arr
 * @return {number}
 */
 var sumOddLengthSubarrays = function(arr) {
    let count = 0;
    
    for(let i = 1; i <= arr.length; i += 2) {
        let sum = 0;
        for(let j = 0; j < i; j++) {
            sum += arr[j];
        }
        count += sum;
        
        for(let j = 0; j < arr.length - i; j++) {
            sum += -arr[j] + arr[j + i];
            count += sum;
        }
    }
            
    return count;
};