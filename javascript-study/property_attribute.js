const person = {
  // 데이터 프로퍼티
  firstName: 'Seongkyun',
  lastName: 'Yu',

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(' ');
  }
};

// 메소드처럼 호출하는게 아니라 프로퍼티처럼 써야한다
person.fullName = 'Heegun Lee';

console.log(person.fullName);