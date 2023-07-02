"use strict";

const Node = require("./node");

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }
  isEmpty() {
    return this.front === null || this.length === null;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
      this.length++;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
      this.length++;
    }
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Empty");
      return false;
    }
    const temp = this.front;
    this.front = temp.next;
    temp.next = null;
    return temp.value;
  }
  peek() {
    if (this.isEmpty()) {
      return "Empty Queue";
    }
    return this.front.value;
  }
}

module.exports = Queue;
