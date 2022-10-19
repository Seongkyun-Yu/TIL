/**
 * https://leetcode.com/problems/kth-distinct-string-in-an-array/
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    const map = {};
    for(let i = 0; i < arr.length; i++) {
        if (map[arr[i]]?.count) {
            map[arr[i]].count += 1;
            continue;
        }
        
        map[arr[i]] = {
            char: arr[i],
            index: i,
            count: 1,
        }
    }

    const list = [];
    for(const key in map) {
        const cInfo = map[key];
        if (cInfo.count > 1) continue;
        list.push(cInfo);
    }

    list.sort((a, b) => a.index - b.index);

    return list[k - 1]?.char || "";   
};