class CircularQueue {
  constructor(capacity) {
    this.capacity = capacity;
    this.front = -1;
    this.rear = 0;
    this.array = new Array(capacity);
  }

  put(value) {
    if (this.rear === this.front) {
      console.log('overflow');
      return undefined;
    }
    if (this.front === -1) this.front++;

    this.array[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
  }

  get() {
    if (this.front === (this.rear - 1) % this.capacity) {
      console.log('underflow');
      return undefined;
    }

    const result = this.array[this.front];
    this.front = ++this.front % this.capacity;

    if (this.front === this.rear) {
      this.front = -1;
      this.rear = 0;
    }

    return result;
  }

  peek() {
    if (this.front === -1) {
      console.log('empty queue');
      return 'undefined';
    }
    return this.array[this.rear - 1];
  }

  print() {
    let str = '';
    let printCount = 0;

    if (this.front === this.rear) printCount = this.capacity;
    else if (this.front < this.rear) printCount = this.rear;
    else printCount = this.capacity - (this.front - this.rear);

    for (let i = this.front, j = 0; j < printCount; i++, j++) {
      str += this.array[i % this.capacity] + ' ';
    }

    console.log(str);
  }
}

const circularQueue = new CircularQueue(5);

for (let i = 0; i < 5; i++) {
  circularQueue.put(i);
}

circularQueue.print();
console.log(circularQueue.get());
console.log(circularQueue.get());
console.log(circularQueue.get());
console.log(circularQueue.get());
console.log(circularQueue.get());
circularQueue.print();
circularQueue.put(5);
circularQueue.put(6);
circularQueue.put(7);
circularQueue.print();
