/* eslint-disable max-classes-per-file */
class Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    if (this.head === null) return true;
    return false;
  }

  prepend(value) {
    this.head = new Node(value, this.head);
  }

  append(value) {
    let curr = this.head;
    let prev = null;

    if (curr === null) {
      this.head = new Node(value, null);
      return;
    }

    while (curr !== null) {
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, null);
  }

  setHead(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      curr = curr.next;
    }

    this.head = curr;
    return true;
  }

  access(index) {
    let curr = this.head;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return undefined;
      }
      curr = curr.next;
    }

    return curr.value;
  }

  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
      return true;
    }

    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      prev = curr;
      curr = curr.next;
    }

    prev.next = new Node(value, curr);
    return true;
  }

  remove(index) {
    if (index === 0) {
      if (this.head !== null) {
        this.head = this.head.next;
        return true;
      }
      return false;
    }

    let curr = this.head;
    let prev = null;

    for (let i = 0; i < index; i++) {
      if (curr === null) {
        return false;
      }
      prev = curr;
      curr = curr.next;
    }

    prev.next = curr.next;
  }

  print() {
    let curr = this.head;

    if (curr === null) {
      console.log('[]');
      return;
    }

    let s = '';
    while (curr !== null) {
      s += `${curr.value} `;
      curr = curr.next;
    }
    console.log(`[${s}]`);
  }
}

class LinkedQueue {
  constructor() {
    this.Queue = new SinglyLinkedList();
  }

  put(value) {
    this.Queue.append(value);
  }

  get() {
    const result = this.Queue.head.value;
    this.Queue.head = this.Queue.head.next;
    return result;
  }

  peek() {
    if (this.Queue.head === null) {
      console.log('empty Queue');
      return;
    }
    return this.Queue.head.value;
  }

  print() {
    this.Queue.print();
  }
}

const linkedQueue = new LinkedQueue();

console.log(linkedQueue.peek());

for (let i = 0; i < 10; i++) {
  linkedQueue.put(i);
}
linkedQueue.print();

for (let i = 0; i < 5; i++) {
  console.log(linkedQueue.get(i));
}
linkedQueue.print();

console.log(linkedQueue.peek());
