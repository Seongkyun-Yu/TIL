/**
 * @param {number[]} nums
 */
 var Solution = function(nums) {
    this.nums = nums;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function(target) {
    const result = [];
    
    for(let i = 0; i < this.nums.length; i++) {
        if (this.nums[i] === target) result.push(i);
    }

    console.log(result, Math.random() * (result.length - 1))
    
    return result[Math.floor(Math.random() * (result.length - 1))];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

const temp = new Solution([1, 2, 3, 3, 3]);
console.log(temp.pick(3));