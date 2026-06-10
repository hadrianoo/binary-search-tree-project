class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
export { Node };

class Tree {
  constructor(arr) {
    this.root = buildTree(arr);
  }
}
