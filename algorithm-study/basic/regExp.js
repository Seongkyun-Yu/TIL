const number = '010-1234-5678';
let regExp = /^01(?:[0-9])-(?:\d{3}|\d{4})-\d{4}$/;

console.log(regExp.test(number));

const mail = 'ysungkyun@gmail.com';
regExp = /^[0-9a-zA-Z]*@[0-9a-zA-Z]*.[a-zA-Z]{2,3}$/i;
regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;

console.log(regExp.test(mail));
