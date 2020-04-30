// 월의 4는 5월을 의미한다
let date = new Date(2019, 4);
console.log(date); // Wed May 01 2019 00:00:00 GMT+0900

// 문자열로 생성하면 5월을 5로 쓸 수 있다.
date = new Date('2019/5/16/17:24:30:10')
console.log(date);

// 1970/01/01 00:00:00부터 인수로 전달한 시간까지의 밀리초 반환
date = Date.parse('1970/01/02/09:00:00');
console.log(date); // 86400000

// 위와 비슷하지만 로컬 타임이 아닌 UTC기준 밀리초를 알려줌
// 문자열로 전달 불가(NaN을 반환함)
date = Date.UTC(1970, 0, 2);
console.log(date); // 86400000

date = Date.UTC('1970/1/2');
console.log(date); // NaN

