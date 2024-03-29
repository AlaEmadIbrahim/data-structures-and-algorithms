"use strict";

const K_aryTree = require("./k-ary-tree");

function fizzBuzzTree(tree) {

  if (!tree.root) return null;
  let counter = 0;
  let newTree = new K_aryTree();

  const treeFizz = (node) => {
    if (node.data % 3 === 0 && node.data % 5 === 0) {
      newTree.root.child[counter] = "FizzBuzz";
    } else if (node.data % 3 === 0) {
      newTree.root.child[counter] = "Fizz";
    } else if (node.data % 5 === 0) {
      newTree.root.child[counter] = "Buzz";
    } else {
      newTree.root.child[counter] = node.data.toString();
    }
    counter++;

    if (node.child) {
      for (let i = 0; i < node.child.length; i++) {
        treeFizz(node.child[i]);
      }
    }
  };

  treeFizz(tree.root);
  return newTree;
}

module.exports = fizzBuzzTree;
