const ingredients = { noodle: '튀긴면', soup: '스프', topping: '계란' };

const { noodle, soup, topping, time = 3 } = ingredients;

console.log(noodle, soup, topping, time); // 튀긴면, 스프, 계란, 3

const { noodle: noo, soup: sou, topping: topp, cooktime = 3 } = ingredients;
console.log(noo, sou, topp, time);

const { topping: toppp } = ingredients;
console.log(toppp); // 계란

// 함수의 매개변수에도 사용할 수 있다.
function cook({ time, salty }) {
  console.log(`요리시간: ${time}분, 간: ${salty}`);
}

cook({ time: 3, salty: '삼삼하게' })