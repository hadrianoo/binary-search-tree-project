class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.array = this.#sortAndRemove(arr);
    console.log(this.array);
    this.root = this.#buildTree(this.array, 0, this.array.length - 1);
  }

  #sortAndRemove(arr) {
    return [...new Set(arr.sort((a, b) => a - b))];
  }

  #buildTree(array, start, end) {
    if (start > end) return null;

    let mid = start + Math.floor((end - start) / 2);
    let root = new Node(array[mid]);

    root.left = this.#buildTree(array, start, mid - 1);
    root.right = this.#buildTree(array, mid + 1, end);

    return root;
  }

  includes(value, node = this.root) {
    if (node.data === value) return true;

    if (value < node.data && node.left !== null) {
      return this.includes(value, node.left);
    }
    if (value > node.data && node.right !== null) {
      return this.includes(value, node.right);
    }
    return false;
  }
  insert(value, node = this.root) {
    if (this.includes(value)) return;
    if (value < node.data) {
      if (node.left === null) {
        node.left = new Node(value);
        return;
      }
      this.insert(value, node.left);
    } else {
      if (node.right === null) {
        node.right = new Node(value);
        return;
      }
      this.insert(value, node.right);
    }
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

export { Node, Tree };
