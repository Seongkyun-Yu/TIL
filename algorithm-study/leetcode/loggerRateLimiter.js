// EASY
// https://leetcode.com/problems/logger-rate-limiter/
var Logger = function() {
    this.data = {};
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.data[message] || this.data[message] <= timestamp) {
        this.data[message] = timestamp + 10;
        return true;
    }
    
    return false;
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */