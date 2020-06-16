/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
class Node {
  constructor(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
  }

  isEmpty() {
    return this.head === null;
  }

  prepend(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.head.prev = this.head;
      return;
    }

    const cur = this.head;
    this.head.prev = new Node(value, this.head, cur);
    this.head = this.head.prev;
  }

  append(value) {
    if (this.head === null) {
      this.head = new Node(value, this.head, null);
      return;
    }
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = new Node(value, cur, null);
  }

  setHead(index) {
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    this.head = cur;
  }

  access(index) {
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur.value;
  }

  insert(index, value) {
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    const newNode = new Node(value, cur.prev, cur);
    cur.prev.next = newNode;
    cur.prev = newNode;
  }

  remove(index) {
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    const nextNode = cur.next;
    cur.prev.next = nextNode;
    nextNode.prev = cur.prev;
  }

  print() {
    let result = '';
    let cur = this.head;
    while (cur !== null) {
      result += cur.value + ' ';
      cur = cur.next;
    }
    console.log(result);
  }
}

const dll = new DoublyLinkedList();

for (let i = 0; i < 10; i++) {
  dll.append(i);
}

dll.print();
console.log(dll.access(3));
dll.insert(3, 7);
dll.print();
dll.remove(3);
dll.print();
dll.setHead(3);
dll.print();
