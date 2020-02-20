//  부동소수점 문제로 0.1을 100번 더했으나 10이 나오지 않는다.

result = 0.0;

for(let i=0; i<100; i++){
    result += 0.1;
}

console.log(result)