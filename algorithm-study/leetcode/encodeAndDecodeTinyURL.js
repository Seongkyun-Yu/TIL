/**
 * MEDIUM
 * https://leetcode.com/problems/encode-and-decode-tinyurl/
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const hashmap = {};
var encode = function (longUrl) {
  const temp = {};
  for (const c of longUrl) {
    temp[c] = temp[c] + 1 || 1;
  }

  let shortUrl = '';
  for (const key in temp) {
    shortUrl += key + temp[key];
  }

  hashmap[shortUrl] = longUrl;

  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return hashmap[shortUrl];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
