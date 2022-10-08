// https://leetcode.com/problems/implement-trie-prefix-tree/

var Trie = function() {   
    const TrieNode = function() {
        this.children = {};
        this.lastNode = false;
    }
    
    this.TrieNode = TrieNode;
    this.root = new TrieNode();
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let cur = this.root;
    
    for(const c of word) {
        if (!cur.children[c]) cur.children[c] = new this.TrieNode();
        cur = cur.children[c];
    }
    cur.lastNode = true;
    
    return true;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let cur = this.root;
    
    for(const c of word) {
        if (!cur.children[c]) return false;
        
        cur = cur.children[c];
    }
    
    return cur.lastNode;
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    cur = this.root;
    
    for(const c of prefix) {
        if (!cur.children[c]) return false;
        
        cur = cur.children[c];
    }
    
    return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */