/**
 * @param {number[][]} logs
 * @return {number}
 */
 var maximumPopulation = function(logs) {
    const arr = new Int8Array(100)
    
    for(let log of logs) {
        const [birthYear, deathYear] = log
        for(let i = birthYear - 1950; i < deathYear - 1950; i++) {
            arr[i]++
        }
    }
    
    let maxPopulation = 0
    let maxYear = 0
    
    for(let i=0; i < arr.length; i++) {
        if (arr[i] > maxPopulation) {
            maxPopulation = arr[i];
            maxYear = i;
        }
    }
    
    return maxYear + 1950;
};