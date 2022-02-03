// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,1,2]) // 2
// countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
// countUniqueValues([]) // 0
// countUniqueValues([-2,-1,-1,0,1]) // 4
// Time Complexity - O(n)

// Space Complexity - O(n)

// Bonus

// You must do this with constant or O(1) space and O(n) time.

function countUniqueValues(array){
    // add whatever parameters you deem necessary - good luck!
    if (array.length === 0) return 0;
    if (array.length === 1) return 1;
    
    let i = 0;
    
    for (let j = 1; j < array.length; j++) {
      if (array[i] === array[j]) continue;
      
      i++;
      array[i] = array[j];
    }
    
    return i + 1;
  }