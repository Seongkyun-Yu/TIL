// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT

// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 TUE를 반환하세요.

// 2016년
// https://programmers.co.kr/learn/courses/30/lessons/12901

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)
// 입출력 예
// a	b	result
// 5	24	"TUE"

function solution(a, b) {
  const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let sumDays = 0;

  for (let i = 0; i < a - 1; i++) {
    sumDays += days[i];
  }
  sumDays += b;

  if (sumDays % 7 === 0) return 'THU';
  else if (sumDays % 7 === 1) return 'FRI';
  else if (sumDays % 7 === 2) return 'SAT';
  else if (sumDays % 7 === 3) return 'SUN';
  else if (sumDays % 7 === 4) return 'MON';
  else if (sumDays % 7 === 5) return 'TUE';
  else return 'WED';
}

console.log(solution(5, 24));
