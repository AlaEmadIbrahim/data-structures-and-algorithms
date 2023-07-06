"use strict";

const Queue = require("../AnimalShelter");

describe("Testing the AnimalShelter Queue", () => {
  it("Can successfully enqueue animal (dog or cat) into AnimalShelter", () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: "Charlie",
      type: "dog",
      age: 1,
    });

    expect(newQueue.dogArray[0].type).toEqual("dog");
  });

  it("Can successfully enqueue multiple animals into AnimalShelter", () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: "Charlie",
      type: "dog",
      age: 1,
    });

    expect(newQueue.dogArray[0].type).toEqual("dog");
    newQueue.enqueue({
      name: "Coco",
      type: "cat",
      age: 2,
    });
    expect(newQueue.catArray[0].type).toEqual("cat");
  });

  it("Can successfully dequeue cat out of the AnimalShelter", () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: "Coco",
      type: "cat",
      age: 2,
    });

    expect(newQueue.dequeue("cat")).toStrictEqual({
      name: "Coco",
      type: "cat",
      age: 2,
    });
  });

  it("Can successfully dequeue dog out of the AnimalShelter", () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: "Max",
      type: "dog",
      age: 3,
    });
    expect(newQueue.dequeue("dog")).toStrictEqual({
      name: "Max",
      type: "dog",
      age: 3,
    });
  });

  it("Return null value when try to dequeue non cat/dog animal", () => {
    let newQueue = new Queue();
    newQueue.enqueue({
      name: "zzz",
      type: "dog",
      age: 3,
    });
    expect(newQueue.dequeue("null")).toBeNull();
  });
});
