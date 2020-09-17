const getCombi = (inputArr, combiCount) => {
  if (combiCount === 1) return inputArr;

  const result = [];
  inputArr.forEach((one, i, arr) => {
    const rest = arr.slice(i + 1);
    const combis = getCombi(rest, combiCount - 1);
    combis.forEach((combi) => result.push(`${one}${combi}`));
  });

  return result;
};

function solution(orders, course) {
  const menus = [];
  course.forEach((count) => {
    orders.forEach((order) => {
      menus.push(...getCombi(order.split('').sort(), count));
    });
  });

  const countObj = {};
  menus.forEach((menu) => {
    if (countObj[menu]) countObj[menu] += 1;
    else countObj[menu] = 1;
  });

  const splitCourse = course.map((count) =>
    Object.keys(countObj).filter(
      (key) => countObj[key] > 1 && key.length === count,
    ),
  );

  const result = [];
  splitCourse.forEach((list) => {
    result.push(
      ...list.reduce(
        (prev, cur) =>
          countObj[prev[0]] > countObj[cur]
            ? prev
            : countObj[prev[0]] === countObj[cur]
            ? [...prev, cur]
            : [cur],
        [],
      ),
    );
  });
  console.log(result.sort());
  return result.sort();
}

solution(['XYZ', 'XWY', 'WXA'], [2, 3, 4]);
