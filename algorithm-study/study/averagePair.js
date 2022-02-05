// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:

// averagePair([1,2,3],2.5) // true
// averagePair([1,3,3,5,6,7,10,12,19],8) // true
// averagePair([-1,0,3,4,5,6], 4.1) // false
// averagePair([],4) // false

function averagePair(nums, target){
    // add whatever parameters you deem necessary - good luck!
    if (nums.length === 0) return false;
    
    let i = 0;
    let j = nums.length - 1;
    let avg = 0;
    
    while(i < j) {
        avg = (nums[i] + nums[j]) / 2;
        
        if (avg === target) return true;
        if (avg < target) i++;
        else j--;
    }
    
    return false;
}