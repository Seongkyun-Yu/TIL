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
    if ((this.front + 1) % this.capacity === this.rear) {
      console.log('underflow');
      return undefined;
    }

    const result = this.array[this.front];
    this.front = ++this.front % this.capacity;

    return result;
  }

  peek() {
    return this.array[this.rear];
  }

  print() {
    let str = '';

    for (let i = this.front; i % this.capacity !== this.rear; i++) {
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
circularQueue.put(5);
circularQueue.print();
