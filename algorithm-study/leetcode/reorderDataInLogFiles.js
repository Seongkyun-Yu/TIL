/**
 * https://leetcode.com/problems/reorder-data-in-log-files/
 * @param {string[]} logs
 * @return {string[]}
 */
 var reorderLogFiles = function(logs) {
    return logs.sort((a, b) => {        
        const str1List = a.split(" ");
        const str2List = b.split(" ");
        
        const str1Type = Number.isNaN(+str1List[1]) ? "STRING" : "NUMBER";
        const str2Type = Number.isNaN(+str2List[1]) ? "STRING" : "NUMBER";
        
        if (str1Type === "STRING" && str2Type === "NUMBER") return -1;
        if (str1Type === "NUMBER" && str2Type === "STRING") return 1;
        if (str1Type === "NUMBER" && str2Type === "NUMBER") return 0;
        
        
        const len = Math.max(str1List.length, str2List.length);
        
        let i = 1;
        while(true) {
            if (str1List[i] === undefined && str2List[i] === undefined) {
                if (str1List[0] < str2List[0]) return -1;
                else if (str1List[0] > str2List[0]) return 1;
                else return 0;
            }
            if (str1List[i] === undefined) return -1;
            if (str2List[i] === undefined) return 1;
            if (str1List[i] < str2List[i]) return -1;
            if (str1List[i] > str2List[i]) return 1;
            i++;
        }
    })
};