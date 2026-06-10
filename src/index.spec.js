import { Node, Tree } from "./index.js";
describe("test Node class", () => {
  const root = new Node(3);
  test("data attribute", () => {
    expect(root.data).toEqual(3);
  });
  test("left attribute", () => {
    root.left = [1, 2, 3, 4];
    expect(root.left).toEqual([1, 2, 3, 4]);
  });
  test("right attribute", () => {
    root.right = [8, 2, 3, 4];
    expect(root.right).toEqual([8, 2, 3, 4]);
  });
});

describe("test includes method", () => {
  const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  test("test if tree includes value", () => {
    expect(bst.includes(3)).toEqual(true);
  });
  test("test if tree not includes value", () => {
    expect(bst.includes(2)).toEqual(false);
  });
});

describe("test insert method", () => {
  const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  test("insert 2 to tree", () => {
    bst.insert(2);
    expect(bst.includes(2)).toEqual(true);
    expect(bst.root.left.left.right.left.data).toEqual(2);
  });
  test("insert 128 to tree", () => {
    bst.insert(128);
    expect(bst.includes(128)).toEqual(true);
    expect(bst.root.right.right.left.data).toEqual(128);
  });
  test("insert 128 two times to tree", () => {
    bst.insert(128);
    bst.insert(128);
    expect(bst.includes(128)).toEqual(true);
    expect(bst.root.right.right.left.data).toEqual(128);
    expect(bst.root.right.right.left.right).toEqual(null);
    expect(bst.root.right.right.left.left).toEqual(null);
  });
});
describe("test deleteItem method", () => {
  const bst = new Tree([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]);
  test("delete when it is last element", () => {
    bst.deleteItem(3);
    expect(bst.includes(3)).toEqual(false);
    expect(bst.root.left.left.right).toEqual(null);
  });
  test("delete when it has one element", () => {
    bst.deleteItem(324);
    expect(bst.includes(324)).toEqual(false);
    expect(bst.root.right.right.data).toEqual(6345);
  });
});
