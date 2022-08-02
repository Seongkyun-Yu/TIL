// https://leetcode.com/problems/time-based-key-value-store/

var TimeMap = function() {
    this.map = {};
};

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    this.map[key] = this.map[key] ? [...this.map[key], {timestamp, value}] : [{timestamp, value}];
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    if (!this.map[key]) return "";
    
    const datas = this.map[key];
    let min = 0;
    let max = datas.length - 1;
    let result = "";
    while(min <= max) {
        const mid = Math.floor((min + max) / 2);
        if (datas[mid].timestamp <= timestamp) {
            result = datas[mid].value;
            min = mid + 1;
        } else {
            max = mid - 1;
        }
    }
    
    return result;
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */