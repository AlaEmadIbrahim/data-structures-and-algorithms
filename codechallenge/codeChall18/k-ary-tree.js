"use strict";

const TreeNode = require("./node");

class karyTree {
  constructor(data) {
    var node = new TreeNode(data);
    this.root = node;
  }
  add(data, toNodeData) {
    const node = new TreeNode(data);
    const parent = toNodeData ? this.findBFS(toNodeData) : null;
    node.parent = parent;
    if (parent) {
      parent.child.push(node);
      node.parent = parent;
    } else {
      if (!this.root) {
        this.root = node;
        node.parent = parent;
      } else return "Tried to store node as root when root already exists.";
    }
  }
  findBFS(data) {
    const queue = [this.root];
    let _node = null;
    this.traverseBFS((node) => {
      if (node.data === data) {
        _node = node;
      }
    });

    return _node;
  }
  traverseBFS(cb) {
    const queue = [this.root];

    if (cb)
      while (queue.length) {
        const node = queue.shift();
        cb(node);
        for (const child of node.child) {
          queue.push(child);
        }
      }
  }
}

module.exports = karyTree;
