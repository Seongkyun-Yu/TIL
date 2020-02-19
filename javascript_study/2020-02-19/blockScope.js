// 블록스코프 영역 할당시 명시적으로 괄호({})가 있어야 한다.


const superhero = ['아이언맨', '캡틴아메리카', '토르', '블랙위도우', '앤트맨', '닥터스트레인지'];

let i= '오오';
function print(hero1, hero2, hero3){
    console.log(hero1, hero2, hero3[5]);
    let i = hero1;
    if(hero2===1){
        let i = 'str';
        console.log(i)
    }
        
    console.log(i)
}

superhero.forEach(print)

console.log(i)

// let value = 'hello!';

// function myFunction(num) {
//     let value = 'bye!';
//   if (true) {
//     let value = 'world';
//     console.log('block scope: ');
//     console.log(value);
//   }
//   console.log('function scope: ');
//   console.log(value);
// }

// myFunction();
// console.log('global scope: ');
// console.log(value);

// console.log('=============================')
// superhero.forEach(myFunction)


