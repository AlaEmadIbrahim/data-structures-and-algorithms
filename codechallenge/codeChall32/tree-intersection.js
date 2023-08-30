class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class HashMap {
  constructor() {
    this.map = {};
  }

  add(key, value) {
    this.map[key] = value;
  }

  has(key) {
    return this.map.hasOwnProperty(key);
  }
}

function tree_intersection(tree1, tree2) {
  const valuesSet = new Set();
  const hashMap = new HashMap();

  function traverseAndAddToMap(node) {
    if (!node) {
      return;
    }

    hashMap.add(node.value, true);
    traverseAndAddToMap(node.left);
    traverseAndAddToMap(node.right);
  }

  traverseAndAddToMap(tree1);

  function traverseAndCheckIntersection(node) {
    if (!node) {
      return;
    }

    if (hashMap.has(node.value)) {
      valuesSet.add(node.value);
    }

    traverseAndCheckIntersection(node.left);
    traverseAndCheckIntersection(node.right);
  }

  traverseAndCheckIntersection(tree2);

  return valuesSet;
}
const tree1 = new TreeNode(100);
tree1.left = new TreeNode(160);
tree1.right = new TreeNode(125);
tree1.left.left = new TreeNode(175);
tree1.left.right = new TreeNode(200);

const tree2 = new TreeNode(125);
tree2.left = new TreeNode(175);
tree2.right = new TreeNode(200);
tree2.left.left = new TreeNode(500);
tree2.left.right = new TreeNode(100);

const result = tree_intersection(tree1, tree2);
console.log(result); // >>>> Output: Set { 100, 125, 175, 200 }
