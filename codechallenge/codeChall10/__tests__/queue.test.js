"use strict";

const Queue = require("../queue/queue");

describe("Testing the Queue", () => {
  it("Can successfully push onto a stack", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.rear.value).toEqual(1);
  });

  it("Can successfully push multiple values onto a stack", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    expect(newQueue.rear.value).toEqual(1);
    newQueue.enqueue(2);
    expect(newQueue.rear.value).toEqual(2);
  });

  it("Can successfully dequeue out of a queue the expected value", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    expect(newQueue.dequeue()).toEqual(1);
    expect(newQueue.dequeue()).toEqual(2);
    expect(newQueue.dequeue()).toEqual(3);
    expect(newQueue.dequeue()).toEqual(4);
  });

  it("Can successfully empty a queue after multiple dequeues", () => {
    let newQueue = new Queue();
    newQueue.enqueue(1);
    newQueue.enqueue(2);
    newQueue.enqueue(3);
    newQueue.enqueue(4);
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    newQueue.dequeue();
    expect(newQueue.isEmpty()).toBeTruthy();
  });

  it("Can successfully peek into a queue, seeing the expected value", () => {
    let newQueue = new Queue();
    newQueue.enqueue("I am a front");
    newQueue.enqueue("I am a rear");
    expect(newQueue.peek()).toEqual("I am a front");
  });

  it("Can successfully empty queue", () => {
    let newQueue = new Queue();
    expect(newQueue instanceof Queue).toBeTruthy();
    expect(newQueue.peek()).toBe("Empty Queue");
  });

  it("Calling dequeue or peek on empty queue raises exception", () => {
    let newQueue = new Queue();
    expect(newQueue.dequeue()).toBeFalsy();
    expect(newQueue.peek()).toBe("Empty Queue");
  });
});
