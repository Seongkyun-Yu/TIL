/* eslint-disable max-classes-per-file */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
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
    return this.head ? true : false;
  }

  prepend(value) {
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  append(value) {
    let currentNode = this.head;
    while (!currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = new Node(value, null);
  }

  setHead(index) {
    let currentNode = this.head;
    let count = 0;
    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }
    this.head = currentNode;
  }

  access(index) {}

  insert(index, value) {}

  remove(index) {}

  print() {}
}

const myList = new SinglyLinkedList();
myList.print();

for (let i = 0; i < 10; i++) {
  myList.append(i + 1);
}
myList.print();

for (let i = 0; i < 10; i++) {
  myList.prepend(i + 1);
}
myList.print();

const value = myList.access(3);
console.log(`myList.access(3) = ${value}`);

myList.insert(8, 128);
myList.print();

myList.remove(4);
myList.print();

myList.setHead(10);
myList.print();
