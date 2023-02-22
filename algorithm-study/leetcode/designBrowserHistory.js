/**
 * MEDIUM
 * https://leetcode.com/problems/design-browser-history/
 * @param {string} homepage
 */
class Node {
  constructor(val, prev, next) {
    this.val = val;
    this.prev = prev || null;
    this.next = next || null;
  }
}
var BrowserHistory = function (homepage) {
  this.cur = new Node(homepage);

  return homepage;
};

/**
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function (url) {
  this.cur.next = new Node(url, this.cur);
  this.cur = this.cur.next;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function (steps) {
  let cur = this.cur;
  while (steps && cur.prev) {
    cur = cur.prev;
    steps--;
  }
  this.cur = cur;
  return cur.val;
};

/**
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function (steps) {
  let cur = this.cur;
  while (steps && cur.next) {
    cur = cur.next;
    steps--;
  }
  this.cur = cur;
  return cur.val;
};

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
