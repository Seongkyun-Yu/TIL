// 제어문 연습 문제

// 1. 변수 x가 10보다 크고 20보다 작을 때 변수 X를 출력하는 조건식을 완성하라
let x = 15;

if (x > 10 && x < 20)
  console.log(x);


// 2. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
for (let i = 0; i < 10; i++) {
  if (i % 2 == 0)
    console.log(i);
}


// 3. for문을 사용하여 0부터 10미만의 정수 중에서 짝수만을 작은 수부터 문자열로 출력하시오.
let str3 = "";
for (let i = 0; i < 10; i++){
  if ( i % 2 == 0 )
  str3 += i;
}
console.log(str3);


// 4. for문을 사용하여 0부터 10미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
for (let i = 9; i >= 0; i--) {
  if ( i % 2 == 1 )
    console.log(i);
}


// 5. while문을 사용하여 0 부터 10 미만의 정수 중에서 짝수만을 작은 수부터 출력하시오.
let q5_i = 0
while ( q5_i < 10 ){
  if (q5_i % 2 == 0)
    console.log(q5_i);
  q5_i++;
}


// 6. while문을 사용하여 0 부터 10 미만의 정수 중에서 홀수만을 큰수부터 출력하시오.
var i = 10
while ( i > 0 ){
  if (i % 2 == 1)
    console.log(i);
  i--;
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
for(let i=1; i<7; i++){
  for(let j=1; j<7; j++){
    if (i + j === 6)
      console.log([i, j]);
  }
}


// 11. 삼각형 출력하기 - pattern 1
let str11 = '// 11. 삼각형 출력하기 - pattern 1 \n';
let addstr11 = '*';
for(let i=0; i<5; i++){
  for(let j=0; j<i+1; j++){
    str11 += addstr11;
  }
  str11 += '\n';
}
console.log(str11);

// 12. 삼각형 출력하기 - pattern 2
let str12_v1 = '// 12. 삼각형 출력하기 - pattern 2 v1 \n';
let addstr12_v1 = '';
for(let i=0; i < 5 ; i++){
  addstr12_v1 += i ? ' ' : ''

  str12_v1 += addstr12_v1;

  for(let j= i; j<5; j++){
    str12_v1 += '*';
  }
  str12_v1 += '\n';
}
console.log(str12_v1)

let str12_v2 = '// 12. 삼각형 출력하기 - pattern 2 v2 \n';
for(let i=0; i < 5 ; i++){
  for(let j=i; j > 0; j--){
    str12_v2 += ' ';
  }
  for(let j= i; j<5; j++){
    str12_v2 += '*';
  }
  str12_v2 += '\n'
}
console.log(str12_v2);


// 13. 삼각형 출력하기 - pattern 3
let str13_v1 = '// 13. 삼각형 출력하기 - pattern 3 v1 \n';
for(let i=0; i<5; i++){
  for(let j=0; j<5-i; j++){
    str13_v1 += '*'
  }
  str13_v1 += '\n';
}
console.log(str13_v1);

let str13_v2 = '// 13. 삼각형 출력하기 - pattern 3 v2 \n';
for(let i=5; i>0; i--){
  for(let j=i; j>0; j--){
    str13_v2 += '*'
  }
  str13_v2 += '\n';
}
console.log(str13_v2);

// 14. 삼각형 출력하기 - pattern 4
let str14 = '// 14. 삼각형 출력하기 - pattern 4 \n';
let addstr14 = '';
for(let i=5; i>0; i--){
  for(let j=i-1; j>0; j--){
    str14 += ' '
  }
  addstr14 += '*';
  str14 += addstr14;
  str14 += '\n';
}
console.log(str14);

// 15. 정삼각형 출력하기
let str15 = '// 15. 정삼각형 출력하기 \n';
for(let i=0; i<5; i++){
  for(let j=4-i; j>0; j--){
    str15 += ' '
  }
  for(let k=0; k<2*i+1; k++){
    str15 += '*';
  }
  str15 += '\n';
}
console.log(str15);

// 16. 정삼각형 출력하기
let str16_v1 = '// 15. 정삼각형 출력하기 (역방향) v1 \n';
let addstr16_v1 = '';
for(let i=0; i<5; i++){
  addstr16_v1 += i ? ' ' : '';

  str16_v1 += addstr16_v1;

  for(let k=9-2*i; k>0; k--){
    str16_v1 += '*'
  }

  str16_v1 += '\n';
}
console.log(str16_v1);

let str16_v2 = '// 15. 정삼각형 출력하기 (역방향) v2 \n';
for(let i=0; i<5; i++){
  for(let j=0; j<i; j++){
    str16_v2 += ' ';
  }
  for(let k=9-2*i; k>0; k--){
    str16_v2 += '*'
  }  
  str16_v2 += '\n';
}
console.log(str16_v2);
