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
    // console.log(this.array);
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

  includes(value, root = this.root) {
    if (root.data === value) return true;

    if (value < root.data && root.left !== null) {
      return this.includes(value, root.left);
    }
    if (value > root.data && root.right !== null) {
      return this.includes(value, root.right);
    }
    return false;
  }
  insert(value) {
    if (this.includes(value)) return;

    function insertItem(value, root) {
      if (root === null) {
        return new Node(value);
      }

      if (value < root.data) {
        root.left = insertItem(value, root.left);
      } else if (value > root.data) {
        root.right = insertItem(value, root.right);
      }
      return root;
    }
    insertItem(value, this.root);
  }
  deleteItem(value) {
    if (!this.includes(value)) return;

    function successor(value, root) {
      if (root.left === null) {
        const succ = root.data;
        root.data = value;
        return succ;
      }
      return successor(value, root.left);
    }

    function delItem(value, root) {
      if (value < root.data) {
        root.left = delItem(value, root.left);
      } else if (value > root.data) {
        root.right = delItem(value, root.right);
      } else {
        if (root.left === null) {
          return root.right;
        }
        if (root.right === null) {
          return root.left;
        }

        root.data = successor(value, root.right);
        root.right = delItem(value, root.right);
      }
      return root;
    }
    delItem(value, this.root);
  }
  levelOrderForEach(callback) {
    let queue = [this.root];
    while (queue.length > 0) {
      const firstElement = queue.shift();
      try {
        callback(firstElement.data);
      } catch (e) {
        throw new Error(e);
      }
      if (firstElement.left !== null) {
        queue.push(firstElement.left);
      }
      if (firstElement.right !== null) {
        queue.push(firstElement.right);
      }
    }
  }
}
// const tree = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
// const prettyPrint = (root, prefix = "", isLeft = true) => {
//   if (root === null || root === undefined) {
//     return;
//   }

//   prettyPrint(root.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//   console.log(`${prefix}${isLeft ? "└── " : "┌── "}${root.data}`);
//   prettyPrint(root.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
// };

// prettyPrint(tree.root);

export { Node, Tree };
