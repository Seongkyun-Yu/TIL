// 다트게임
// https://programmers.co.kr/learn/courses/30/lessons/17682

function solution(dartResult) {
  const pointArray = [];
  for (let i = 0; i < dartResult.length; i++) {
    if (+dartResult[i] === 1 && +dartResult[i + 1] === 0) {
      pointArray.push(10);
      i++;
      continue;
    }

    if (!isNaN(Number(dartResult[i]))) {
      pointArray.push(+dartResult[i]);
      continue;
    }

    switch (dartResult[i]) {
      default:
      case 'S':
        break;
      case 'D':
        pointArray[pointArray.length - 1] = Math.pow(
          pointArray[pointArray.length - 1],
          2,
        );
        break;
      case 'T':
        pointArray[pointArray.length - 1] = Math.pow(
          pointArray[pointArray.length - 1],
          3,
        );
        break;
      case '*':
        pointArray[pointArray.length - 1] *= 2;
        pointArray[pointArray.length - 2] *= 2;
        break;
      case '#':
        pointArray[pointArray.length - 1] *= -1;
        break;
    }
  }

  return pointArray.reduce((cur, acc) => +cur + +acc, 0);
}

console.log(solution('1D2S#10S'));
