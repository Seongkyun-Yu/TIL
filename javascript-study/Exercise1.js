// 제어문 연습 문제

// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 X를 출력하는 조건식을 완성하라
const x = 15;

if (x > 10 && x < 20)
  console.log(x);


// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0)
    console.log(i);
}


// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let str3 = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0)
    str3 += i;
}
console.log(str3);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 9; i >= 0; i--) {
  if (i % 2)
    console.log(i);
}

// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let whileCountQ5 = 0;
while (whileCountQ5 < 10) {
  if (whileCountQ5 % 2 === 0)
    console.log(whileCountQ5);
  whileCountQ5++;
}


// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
let whileCountQ6 = 10;
while (whileCountQ6 > 0) {
  if (whileCountQ6 % 2)
    console.log(whileCountQ6);
  whileCountQ6--;
}


// 7. for 문을 사용하여 0부터 10미만의 정수의 합을 출력하시오.
let sum7 = 0;
for (let i = 0; i < 10; i++) {
  sum7 += i;
}
console.log(sum7);


// 8. 1부터 20 미만의 정수 중에서 2 또는 3의 배수가 아닌 수의 총합을 구하시오.
let sum8 = 0;
for (let i = 1; i < 20; i++) {
  sum8 += i % 2 ? (i % 3 ? i : 0) : 0;
}
console.log(sum8);


// 9. 1부터 20 미만의 정수 중에서 2 또는 3의 배수인 수의 총합을 구하시오.
let sum9 = 0;
for (let i = 1; i < 20; i++) {
  sum9 += i % 2 ? (i % 3 ? 0 : i) : i;
}
console.log(sum9);


// 10. 두 개의 주사위를 던졌을 때, 눈의 합이 6이 되는 모든 경우의 수를 출력하시오.
for (let i = 1; i < 7; i++) {
  for (let j = 1; j < 7; j++) {
    if (i + j === 6)
      console.log([i, j]);
  }
}


// 11. 삼각형 출력하기 - pattern 1
let str11 = '// 11. 삼각형 출력하기 - pattern 1 \n';
const addstr11 = '*';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i + 1; j++) {
    str11 += addstr11;
  }
  str11 += '\n';
}
console.log(str11);

// 12. 삼각형 출력하기 - pattern 2
let str12v1 = '// 12. 삼각형 출력하기 - pattern 2 v1 \n';
let addstr12v1 = '';
for (let i = 0; i < 5; i++) {
  addstr12v1 += i ? ' ' : '';

  str12v1 += addstr12v1;

  for (let j = i; j < 5; j++) {
    str12v1 += '*';
  }
  str12v1 += '\n';
}
console.log(str12v1);

let str12v2 = '// 12. 삼각형 출력하기 - pattern 2 v2 \n';
for (let i = 0; i < 5; i++) {
  for (let j = i; j > 0; j--) {
    str12v2 += ' ';
  }
  for (let j = i; j < 5; j++) {
    str12v2 += '*';
  }
  str12v2 += '\n';
}
console.log(str12v2);


// 13. 삼각형 출력하기 - pattern 3
let str13v1 = '// 13. 삼각형 출력하기 - pattern 3 v1 \n';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5 - i; j++) {
    str13v1 += '*';
  }
  str13v1 += '\n';
}
console.log(str13v1);

let str13v2 = '// 13. 삼각형 출력하기 - pattern 3 v2 \n';
for (let i = 5; i > 0; i--) {
  for (let j = i; j > 0; j--) {
    str13v2 += '*';
  }
  str13v2 += '\n';
}
console.log(str13v2);

// 14. 삼각형 출력하기 - pattern 4
let str14 = '// 14. 삼각형 출력하기 - pattern 4 \n';
let addstr14 = '';
for (let i = 5; i > 0; i--) {
  for (let j = i - 1; j > 0; j--) {
    str14 += ' ';
  }
  addstr14 += '*';
  str14 += addstr14;
  str14 += '\n';
}
console.log(str14);

// 15. 정삼각형 출력하기
let str15 = '// 15. 정삼각형 출력하기 \n';
let addstr15 = '*';
for (let i = 0; i < 5; i++) {
  for (let j = 4 - i; j > 0; j--) {
    str15 += ' ';
  }
  addstr15 += i ? '**' : '';
  str15 = str15 + addstr15 + '\n';
}
console.log(str15);

// 16. 정삼각형 출력하기
let str16v1 = '// 16. 정삼각형 출력하기 (역방향) v1 \n';
let addstr16v1 = '';
for (let i = 0; i < 5; i++) {
  addstr16v1 += i ? ' ' : '';
  str16v1 += addstr16v1;

  for (let j = 9 - 2 * i; j > 0; j--) {
    str16v1 += '*';
  }
  str16v1 += '\n';
}
console.log(str16v1);

let str16v2 = '// 16. 정삼각형 출력하기 (역방향) v2 \n';
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < i; j++) {
    str16v2 += ' ';
  }
  for (let j = 9 - 2 * i; j > 0; j--) {
    str16v2 += '*';
  }
  str16v2 += '\n';
}
console.log(str16v2);
