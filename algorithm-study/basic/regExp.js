const number = '010-1234-5678';
let regExp = /^01(?:[0-9])-(?:\d{3}|\d{4})-\d{4}$/;

console.log(regExp.test(number));

const mail = 'ysungkyun@gmail.com';
regExp = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-zA-Z]{2,3}$/i;
regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

console.log(regExp.test(mail));

const password = '1234!5678badd90123aa';
regExp = /[0-9a-zA-Z]{8,10}/;
regExp = /^[a-z0-9!~@#$%^&*()?+=/]{6,16}$/;
const regExp2 = /[a-zA-Z]{2,3}/g;
console.log(regExp2.test(password));

// : 숫자, 특문 각 1회 이상, 영문은 2개 이상 사용하여 8자리 이상 입력
const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
console.log(regExpPw.test(password));

console.log(mail.search('kyun'));
console.log(mail.replace('kyun', 'hi'));

const korean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
