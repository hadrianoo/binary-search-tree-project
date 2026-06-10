import { Node } from "./index.js";
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
