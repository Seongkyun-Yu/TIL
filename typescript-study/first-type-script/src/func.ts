// Shape 라는 interface 를 선언합니다.
interface Shape {
  getArea(): number;
  // Shape interface 에는 getArea 라는 함수가 꼭 있어야 하며 해당 함수의 반환값은 숫자입니다.
}

class Circle implements Shape {
  // `implements` 키워드를 사용하여 해당 클래스가 Shape interface 의 조건을 충족하겠다는 것을 명시합니다.
  //public으로 선언된 파라미터는 외부에서 조회할 수 있습니다.
  constructor(public radius: number) {
    this.radius = radius;
  }

  // 너비를 가져오는 함수를 구현합니다.
  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  //private으로 선언된 파라미터는 외부에서 조회할 수 없습니다.
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

// console.log(circle.radius);
// console.log(rectangle.width);

//각 클래스가 Shape을 계승하고 있기 때문에, 다음과 같이 Shape 타입으로 클래스로 이루어진 리스트 생성이 가능합니다.
const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});
