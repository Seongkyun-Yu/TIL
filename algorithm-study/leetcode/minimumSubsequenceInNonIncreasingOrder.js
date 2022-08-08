/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    const ascNums = nums.sort((a, b)=> b - a);
    let total= ascNums.reduce((a, b)=> a + b, 0);
    let temp = 0;
    const result = [];

    for(let i = 0; i < nums.length; i++){
        temp += nums[i];
        total -= nums[i];
        result.push(nums[i])

        if (temp > total) return result;
    }
};

console.log(minSubsequence([4,4,7,6,7]))