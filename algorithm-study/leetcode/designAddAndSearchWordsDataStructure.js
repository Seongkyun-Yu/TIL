
// https://leetcode.com/problems/design-add-and-search-words-data-structure/
var WordDictionary = function() {
    this.TrieNode = function() {
        this.children = {};
        this.lastNode = false;
    };
    this.root = new this.TrieNode();
    
    return null;
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    let cur = this.root;
    for(const c of word) {
        if (!cur.children[c]) cur.children[c] = new this.TrieNode();
        cur = cur.children[c];
    }
    
    cur.lastNode = true;
    
    return null;
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const dfs = (index, node) => {
        let cur = node;
        
        for(let i = index; i < word.length; i++) {
            if (word[i] === ".") {
                for(const key in cur.children) {
                    if (dfs(i + 1, cur.children[key])) return true;
                }
                return false;
            } else {
                if (!cur.children[word[i]]) return false;
                cur = cur.children[word[i]];
            }
        }
        
        return cur.lastNode;
    }
    
    return dfs(0, this.root);
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */