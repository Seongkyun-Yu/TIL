/**
 * https://leetcode.com/problems/destination-city/
 * @param {string[][]} paths
 * @return {string}
 */
 var destCity = function(paths) {
    const hash = new Map(paths);

    for(const to of hash.values()) {
        if (!hash.has(to)) return to;
    }
};