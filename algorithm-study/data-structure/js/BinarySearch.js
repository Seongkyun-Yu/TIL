class BinaryTree {
  constructor(array) {
    this.array = array;
  }

  preorder() {
    let str = "";
    const reculsive = (index) => {
      if (this.array[index] === undefined) return;

      str += this.array[index] + " ";

      reculsive(2 * index + 1);
      reculsive(2 * index + 2);
    };

    reculsive(0);
    console.log(str);
  }

  inorder() {
    let str = "";
    const reculsive = (index) => {
      if (this.array[index] === undefined) return;

      reculsive(2 * index + 1);
      str += this.array[index] + " ";
      reculsive(2 * index + 2);
    };

    reculsive(0);
    console.log(str);
  }

  postorder() {
    let str = "";
    const reculsive = (index) => {
      if (this.array[index] === undefined) return;

      reculsive(2 * index + 1);

      reculsive(2 * index + 2);
      str += this.array[index] + " ";
    };

    reculsive(0);
    console.log(str);
  }

  bfs(value) {
    for (let i = 0; i < this.array.length; i++) {
      if (value === this.array[i]) return true;
    }
    return false;
  }

  dfs(value) {
    let result = false;
    const reculsive = (index) => {
      if (this.array[index] === undefined) return;
      if (this.array[index] === value) {
        result = true;
        return;
      }

      reculsive(2 * index + 1);
      reculsive(2 * index + 2);
    };
    reculsive(0);

    return result;
  }
}

tree = new BinaryTree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
tree.preorder();

console.log(tree.dfs(9));
