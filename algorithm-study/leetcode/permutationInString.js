/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const s1Map = { total: 0 };
    
    for(const c of s1) {
        s1Map[c] = (s1Map[c] || 0) + 1;
        s1Map.total = s1Map.total + 1;
    }
        
    
    for(let i = 0, j = 0; j < s2.length; j++)  {
        if (s1Map[s2[j]] ) {
            s1Map[s2[j]] = s1Map[s2[j]] - 1;
            s1Map.total = s1Map.total - 1;
        }

        if (j - i + 1 > s1.length) {
            if (s1Map[s2[i]] !== undefined) {
                console.log(s2[i] ,s1Map[s2[i]] )
                s1Map[s2[i]] += 1;
                s1Map.total += 1;
            }
            i++;
        }
        
        if (s1Map.total === 0) return true;
        
        
        
        console.log("i", i, "j", j)
        console.log(s1Map)
    }
    
    return false;
};

console.log(checkInclusion("hello","ooolleoooleh"))