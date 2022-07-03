/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
//  var checkInclusion = function(s1, s2) {
//     const s1Map = { total: 0 };
    
//     for(const c of s1) {
//         s1Map[c] = (s1Map[c] || 0) + 1;
//         s1Map.total = s1Map.total + 1;
//     }
        
    
//     for(let i = 0, j = 0; j < s2.length; j++)  {
//         if (s1Map[s2[j]] !== undefined) {
//             s1Map[s2[j]] = s1Map[s2[j]] - 1;

//             s1Map.total = s1Map.total - 1;
//         }

//         if (j - i + 1 > s1.length) {
//             if (s1Map[s2[i]] !== undefined) {
//                 console.log(s2[i] ,s1Map[s2[i]] )
//                 s1Map[s2[i]] += 1;
//                 s1Map.total += 1;
//             }
//             i++;
//         }
        
//         if (s1Map.total === 0) return true;
        
        
        
//         console.log("i", i, "j", j)
//         console.log(s1Map)
//     }
    
//     return false;
// };

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
    const s1Map = {};
    const s2Map = {};
    let matches = 0;
    
    for(const c of s1) {
        s1Map[c] = s1Map[c] || 0 + 1;
    }
    
    for(let left = 0, right = 0; right < s2.length; right++) {
        s2Map[s2[right]] = s2Map[s2[right]] || 0 + 1;
        if (s1Map[s2[right]]) matches += 1;
        
        if (right - left + 1 < s1.length) continue;
        
        if (matches === s1.length) return true;
        
        if (s2Map[s2[left]]) {
            s2Map[s2[left]] -= 1;
            if (s1Map[s2[left]]) matches -= 1;
        }
        
        left++;
    }

    return false
};

console.log(checkInclusion("ab","eidboaoo"))