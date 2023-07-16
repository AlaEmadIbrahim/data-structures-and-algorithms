"use strict";

const Node = require("./node");

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }
  preOrder() {
    let result = [];
    let traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  inOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }
  postOrder() {
    let result = [];
    let traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
  }
  findMax() {
    if (!this.root) return "tree is Empty";
    let max = this.root;
    let traverse = (node) => {
      if (node.left) {
        if (max > node.left.value) {
          traverse(node.left);
        } else {
          max = node.left.value;
          traverse(node.left);
        }
      }
      if (node.right) {
        if (max > node.right.value) {
          traverse(node.right);
        } else {
          max = node.right.value;
          traverse(node.right);
        }
      }
    };
    traverse(this.root);
    return max;
  }
}

class BinaryTreeSearch extends BinaryTree {
  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
    }
    let current = this.root;

    function addNode() {
      if (value === current.value) return undefined;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
        }
        current = current.left; 
        addNode();
      } else if (value > current.value) {
        if (!current.right) {
          current.right = node;
        }
        current = current.right; 
        addNode();
      }
    }
    addNode();
  }
  contains(value) {
    let current = this.root;
    while (current !== null) {
      if (current.value === value) {
        return true;
      } else if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = {
  BinaryTree,
  BinaryTreeSearch,
};
