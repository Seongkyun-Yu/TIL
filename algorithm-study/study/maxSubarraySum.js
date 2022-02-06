// Sliding Window - maxSubarraySum
// Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

// Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

// maxSubarraySum([100,200,300,400], 2) // 700
// maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39 
// maxSubarraySum([-3,4,0,-2,6,-1], 2) // 5
// maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2) // 5
// maxSubarraySum([2,3], 3) // null
// Constraints:

// Time Complexity - O(N)

// Space Complexity - O(1)

function maxSubarraySum(nums, count){
    // add whatever parameters you deem necessary - good luck!
    if (nums.length < count) return null;
    
    let maxSum = 0;
    for (let i = 0; i < count; i++) {
        maxSum += nums[i];
    }
    
    let curSum = maxSum;
    for (let j = 1; j < nums.length - count + 1; j++) {
        curSum = curSum - nums[j - 1] + nums[j + count - 1];
        
        maxSum = maxSum < curSum ? curSum : maxSum;
    }
    
    return maxSum;
}