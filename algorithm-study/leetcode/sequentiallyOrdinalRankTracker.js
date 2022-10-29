
var SORTracker = function() {
    this.getCount = 0;
    this.list = [];
    this.sorted = false;
};

/** 
 * @param {string} name 
 * @param {number} score
 * @return {void}
 */
SORTracker.prototype.add = function(name, score) {
    this.list.push({name, score});
    this.sorted = false;
};

/**
 * @return {string}
 */
SORTracker.prototype.get = function() {
    if (this.sorted) return this.list[this.getCount++].name;
    
    this.list.sort((a, b) => {
        if (a.score !== b.score) return b.score - a.score;
        
        if (a.name < b.name) return -1;
        else if (a.name == b.name) return 0;
        else return 1;      
    })
    this.sorted = true;
        
    return this.list[this.getCount++].name;
};

/** 
 * Your SORTracker object will be instantiated and called as such:
 * var obj = new SORTracker()
 * obj.add(name,score)
 * var param_2 = obj.get()
 */