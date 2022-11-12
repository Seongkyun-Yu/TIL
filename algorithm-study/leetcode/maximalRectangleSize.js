/**
 * @param {character[][]} matrix
 * @return {number}
 */
 var maximalRectangle = function(matrix) {
    const histograms = [];
    let maxArea = -Infinity;
    
    for(let i = 0; i < matrix.length; i++) {
        const heights = [];
        const stack = [];
        for(let j = 0; j < matrix[i].length; j++) {
            console.log({stack})
            if (matrix[i][j] === "0") {
                heights.push(0);
                while(stack.length) {
                    const { h, index } = stack.pop();
                    maxArea = Math.max(maxArea, (j - index) * h);
                    console.log(maxArea, (j - index) * h, {j, index, h})
                }
                continue;
            }
            
            let prevHeight = i > 0 && histograms[i - 1][j] ? histograms[i - 1][j] : 0;
            const height = prevHeight + 1;
            
            while(stack[stack.length - 1]?.height > height) {
                const { h, index } = stack.pop();
                maxArea = Math.max(maxArea, (j - index) * h);
                console.log(maxArea, (j - index) * h, j, index, h);
            }
            
            stack.push({ h: height, index: j });
            heights.push(height);
        }
        
        const width = matrix[i].length;
        while(stack.length) {
            const { h, index } = stack.pop();
            maxArea = Math.max(maxArea, (width - index) * h);
        }
        
        histograms.push(heights);
    }
    
    return maxArea;
};