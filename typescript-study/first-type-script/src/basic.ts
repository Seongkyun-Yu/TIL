// 기본 변수 선언 방식
let count: number = 99;
let isEmpty: boolean = false;
let thisIsNumberList: number[] = [1, 2, 3, 4, 5];
let thisIsAlsoNumberList: Array<number> = [1, 2, 3, 4, 5];
let thisIsStringList: string[] = ['a', 'b', 'c'];
let randomList: any[] = [1, true, 'free'];
let thisIsObject: Object = { key: 'value' };

enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Green;

let food: 'rice' | 'noodle';
// food = 'bob'

let u: undefined = undefined;
let n: null = null;

//기본 함수 선언 방식

function sum(x: number, y: number): number {
  return x + y;
}

let myFunc: Function = (num: number, str: string): any => {};

let myFunc2 = (num1: number, num2: number): number => {
  return num1 + num2;
};

let myFunc3 = (a: number, b: number): number => {
  return a + b;
};

function warnUser(): void {
  alert('This is my warning message');
}

function error(message: string): never {
  throw new Error(message);
}

function fail() {
  return error('Something failed');
}

function infiniteLoop(): never {
  while (true) {}
}

function add(a: number, b: number): number {
  return a + b;
}

// add(1); // Error
// add(1, 2, 3); // Error
// add(1, 2); // OK

function sumArray(numbers: number[]): number {
  return numbers.reduce((acc, current) => acc + current, 0);
}

const total = sumArray([1, 2, 3, 4, 5]);
