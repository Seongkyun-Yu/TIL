// // func.ts 파일을 주석처리 하고 여기 주석을 푸세요

// type Person = {
//   name: string;
//   age?: number; // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
// };

// // & 는 Intersection 으로서 두개 이상의 타입들을 합쳐줍니다.
// type Developer = Person & {
//   skills: string[];
// };

// const person: Person = {
//   name: '김사람',
// };

// const expert: Developer = {
//   name: '김개발',
//   skills: ['javascript', 'react'],
// };

// type People = Person[]; // Person[] 를 이제 앞으로 People 이라는 타입으로 사용 할 수 있습니다.
// const people: People = [person, expert];

// type Color = 'red' | 'orange' | 'yellow';
// const color: Color = 'red';
// const colors: Color[] = ['red', 'orange'];
