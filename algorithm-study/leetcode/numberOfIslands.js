/**
 * @param {character[][]} grid
 * @return {number}
 */
 var numIslands = function(grid) {
    let landCount = 0;
     
     const markLand = (i, j) => {
         if (grid[i][j] === '0') return 0;
         
         grid[i][j] = '0'
         
         if (i - 1 >= 0) markLand(i - 1, j);
         if (i + 1 < grid.length) markLand(i + 1, j);
         if (j - 1 >= 0) markLand(i, j - 1);
         if (j + 1 < grid[0].length) markLand(i, j + 1);
         
         return 1;
     }
     
     for (let i = 0; i < grid.length; i++) {
         for (let j = 0; j < grid[0].length; j++) {
             landCount += markLand(i, j);
         }
     }
     
     return landCount;
 };