function solution(array, commands) {
  return commands.map(command => {
      let newArray = array.slice(command[0]-1, command[1]);      
      newArray = newArray.sort((a, b) => a - b);
      return newArray[command[2]-1];
  })
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));
