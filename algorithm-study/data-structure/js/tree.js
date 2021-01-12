/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(array) {
    const nodeList = array.map((data) => new Node(data));
    this.root = nodeList[0];

    for (let i = 1; i < nodeList.length; i++) {
      this.add(this.root, nodeList[i]);
    }
  }

  add(pNode, node) {
    pNode.data <= node.data
      ? this._toLeft(pNode, node)
      : this._toRight(pNode, node);
  }

  _toLeft(pNode, node) {
    if (pNode.left === null) pNode.left = node;
    else this.add(pNode.left, node);
  }

  _toRight(pNode, node) {
    if (pNode.right === null) pNode.right = node;
    else this.add(pNode.right, node);
  }
}
