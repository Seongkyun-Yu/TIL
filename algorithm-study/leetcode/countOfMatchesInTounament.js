/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    let adTeam = n;
    let matches = 0;
    
    while(adTeam > 1) {
        const temp = adTeam / 2;
        adTeam = Math.ceil(temp);
        matches += Math.floor(temp);
    }
    
    return matches
};