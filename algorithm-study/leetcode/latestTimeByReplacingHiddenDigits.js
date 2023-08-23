/**
 * EASY
 * https://leetcode.com/problems/latest-time-by-replacing-hidden-digits/
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
  let newTime = '';
  for (let i = 0; i < time.length; i++) {
    if (time[i] !== '?') {
      newTime += time[i];
      continue;
    }

    if (i === 0 && +time[i + 1] > 3) newTime += 1;
    else if (i === 0 && +time[i + 1] <= 3) newTime += 2;
    else if (i === 0) newTime += 2;
    else if (i === 1 && +newTime[0] === 2) newTime += 3;
    else if (i === 1) newTime += 9;
    else if (i === 3) newTime += 5;
    else newTime += 9;
  }

  return newTime;
};
