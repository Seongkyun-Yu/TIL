const str = 'Hello World';

// last기 때문에 뒤에서부터 검색한다
console.log(str.lastIndexOf('World')); // 6
console.log(str.lastIndexOf('l'));     // 9
console.log(str.lastIndexOf('o', 8));  // 7

// 검색된 문자열을 교체한다
console.log(str.replace('World', 'Yu'));

// 문자열을 나눈다
console.log(str.split(' ')); // ['Hello', 'World']

// 문자열 양쪽 끝 공백 제거
const blankStr = '   foo    ';
console.log(blankStr); // foo
