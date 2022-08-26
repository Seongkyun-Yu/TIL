/**
 * https://leetcode.com/problems/maximum-units-on-a-truck/
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    const sortedBoxTypes = boxTypes.sort((a, b) => b[1] - a[1]);
    let units = 0;
    while(truckSize && sortedBoxTypes.length) {
        const [numberOfBoxes, numberOfUnitsPerBox] = sortedBoxTypes.shift();
        if (truckSize >= numberOfBoxes) {
            units += numberOfBoxes * numberOfUnitsPerBox;
            truckSize -= numberOfBoxes;
        } else {
            units += truckSize * numberOfUnitsPerBox;
            truckSize -= truckSize;
        }
    }
    
    return units;
};