// https://leetcode.com/problems/sequentially-ordinal-rank-tracker/
class SORTracker {
    constructor() {
        this.count = 1;
        this.maxPq = new MaxPriorityQueue({ compare: (a, b) => this.compare(a, b) });
        this.minPq = new MinPriorityQueue({ compare: (a, b) => this.compare(b, a) });
    }

    compare(a, b) {
        if (a.score === b.score) return a.name.localeCompare(b.name);

        return b.score - a.score;
    }

    add(name, score) {
        const cur = { name, score };
        
        if (this.minPq.size() < this.count) this.minPq.enqueue(cur);
        else if (this.compare(this.minPq.front(), cur) > 0) {
            this.maxPq.enqueue(this.minPq.dequeue());
            this.minPq.enqueue(cur);
        } else {
            this.maxPq.enqueue(cur);
        }
    }

    get() {
        const nthItem = this.minPq.front();
        this.count += 1;
        if (this.maxPq.size()) this.minPq.enqueue(this.maxPq.dequeue());
        return nthItem.name;
    }
};