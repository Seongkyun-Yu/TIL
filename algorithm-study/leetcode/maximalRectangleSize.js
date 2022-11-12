/**
 * https://leetcode.com/problems/maximal-rectangle/description/
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {    
    const checkHistogram = (heights) => {
        let maxArea = 0;
        const stack = [];
        
        for(let i = 0; i < heights.length; i++) {
            let startIndex = i;
            const height = heights[i];
            while(stack.length && stack[stack.length - 1]?.h > height) {
                const { h, index } = stack.pop();
                maxArea = Math.max(maxArea, (i - index) * h);
                startIndex = index;
            }
            
            stack.push({ h: height, index: startIndex });
        }
    
        while(stack.length) {
            const { h, index } = stack.pop();
            maxArea = Math.max(maxArea, (heights.length - index) * h);
        }
    
        return maxArea;
    }


    const heights = new Array(matrix[0].length).fill(0);
    let maxArea = 0;
    
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === "0") heights[j] = 0;
            else heights[j]++;
        }
        const area = checkHistogram(heights);
        maxArea = Math.max(maxArea, area);
    }
    
    return maxArea;
};