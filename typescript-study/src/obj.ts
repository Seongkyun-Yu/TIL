interface Person {
  name: string;
  age?: number;
  // 물음표가 들어갔다는 것은, 설정을 해도 되고 안해도 되는 값이라는 것을 의미합니다.
}

interface Developer extends Person {
  skills: string[];
}

const person: Person = {
  name: '김사람',
  age: 20,
};

const expert: Developer = {
  name: '김개발',
  skills: ['javascript', 'react'],
};

const people: Person[] = [person, expert];
