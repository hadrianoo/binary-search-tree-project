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
    this.array = this.#sortAndRemove(arr);
    console.log(this.array);
    this.root = this.#buildTree(this.array, 0, this.array.length - 1);
  }
  #sortAndRemove(arr) {
    return [...new Set(arr.sort((a, b) => a - b))];
  }

  #buildTree(arr, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(arr[mid]);

    root.left = this.#buildTree(arr, start, mid - 1);
    root.right = this.#buildTree(arr, mid + 1, end);

    return root;
  }
}
const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null || node === undefined) {
    return;
  }

  prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
};

prettyPrint(tree.root);
