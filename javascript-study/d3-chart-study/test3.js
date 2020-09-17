function solution(infos, querys) {
  const result = [];

  querys.forEach((qry) => {
    let splitedQry = qry.split(' and ');
    const last = splitedQry.pop().split(' ');
    splitedQry = [...splitedQry, last[0]];
    const qryScore = +last[1];

    let sum = 0;
    infos.forEach((info) => {
      const splitedInfo = info.split(' ');

      const infoScore = +splitedInfo.pop();

      if (splitedQry[0] === '-' || splitedQry[0] === splitedInfo[0]) {
        if (splitedQry[1] === '-' || splitedQry[1] === splitedInfo[1])
          if (splitedQry[2] === '-' || splitedQry[2] === splitedInfo[2])
            if (splitedQry[3] === '-' || splitedQry[3] === splitedInfo[3])
              if (infoScore >= qryScore) sum++;
      }
    });
    result.push(sum);
  });

  return result;
}

solution(
  [
    'java backend junior pizza 150',
    'python frontend senior chicken 210',
    'python frontend senior chicken 150',
    'cpp backend senior pizza 260',
    'java backend junior chicken 80',
    'python backend senior chicken 50',
  ],
  [
    'java and backend and junior and pizza 100',
    'python and frontend and senior and chicken 200',
    'cpp and - and senior and pizza 250',
    '- and backend and senior and - 150',
    '- and - and - and chicken 100',
    '- and - and - and - 150',
  ],
);
