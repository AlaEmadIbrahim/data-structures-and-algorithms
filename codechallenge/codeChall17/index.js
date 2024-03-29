"use strict";

const { BinaryTree, BinaryTreeSearch } = require("./binary-tree");
const breadthFirst = require("./Breadth-first");
const Node = require("./node");
const treeify = require("treeify");

let tree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
six.right = seven;
seven.left = eight;
seven.right = nine;
three.left = four;
three.right = five;

tree = new BinaryTree(one);

console.log(treeify.asTree(tree, true));
let preOrder = tree.preOrder();
console.log("pre order: ", preOrder);

let inOrder = tree.inOrder();
console.log("in order: ", inOrder);

let postOrder = tree.postOrder();
console.log("post order: ", postOrder);

console.log("Max ", tree.findMax());

breadthFirst(tree);
console.log("Result", breadthFirst(tree));

let bstTree = new BinaryTreeSearch();

bstTree.add(50);
bstTree.add(60);
bstTree.add(70);
bstTree.add(40);
bstTree.add(20);
bstTree.add(10);

console.log(treeify.asTree(bstTree, true));

console.log("Contains ", bstTree.contains(10));
console.log("Contains ", bstTree.contains(20));
console.log("Contains ", bstTree.contains(30));
console.log("Contains ", bstTree.contains(5));
console.log("Contains ", bstTree.contains(40));
console.log("Contains ", bstTree.contains(50));
console.log("Contains ", bstTree.contains(60));
console.log("Contains ", bstTree.contains(70));
