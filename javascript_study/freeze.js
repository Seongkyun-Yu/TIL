// 배열함수를 쓰지 않고 Freeze 시키기
function deepFreeze(target) {
  if (target && typeof target === 'object' && !Object.isFrozen(target)) {
    Object.freeze(target);

    let keyArr = Object.keys(target);

    for (let i = 0; i < keyArr.length; i++)
      deepFreeze(target[keyArr[i]]);
  }
}

const person = {
  name: 'Lee',
  home: { city: 'Seoul' },
  company: { city: 'Incheon' }
};


deepFreeze(person);

console.log(Object.isFrozen(person)); // true
console.log(Object.isFrozen(person.home));