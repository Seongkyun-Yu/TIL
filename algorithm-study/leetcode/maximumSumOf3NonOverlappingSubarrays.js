/**
 * https://leetcode.com/problems/maximum-sum-of-3-non-overlapping-subarrays/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSumOfThreeSubarrays = function(nums, k) {
    const window = [];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        sum += nums[i];
        
        if (i >= k) sum -= nums[i - k];
        if (i >= k - 1) window.push(sum);
    }
    
    let bestIndex = 0;
    const leftBestIndex = [];
    for(let i = 0; i < window.length; i++) {
        if (window[i] > window[bestIndex]) bestIndex = i;
        leftBestIndex.push(bestIndex);
    }
    
    const rightBestIndex = [];
    bestIndex = window.length - 1;
    for(let i = window.length - 1; i >= 0; i--) {
        if (window[i] >= window[bestIndex]) bestIndex = i;
        rightBestIndex.unshift(bestIndex);
    }
    
    let ans = [];
    for(let j = k; j < window.length - k; j++) {
        const i = leftBestIndex[j - k];
        const l = rightBestIndex[j + k];
        
        if (ans.length === 0) ans = [i, j, l];
        else if (window[i] + window[j] + window[l] > window[ans[0]] + window[ans[1]] + window[ans[2]]) {
            ans = [i, j, l];
        }
    }
    
    return ans;
};