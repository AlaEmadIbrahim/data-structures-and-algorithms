"use strict";
let AnimalShelter = require("./AnimalShelter");

let animal = new AnimalShelter();

animal.enqueue({
  name: "Charlie",
  type: "dog",
  age: 1,
});
animal.enqueue({
  name: "Coco",
  type: "cat",
  age: 2,
});
animal.enqueue({
  name: "Max",
  type: "dog",
  age: 3,
});
animal.enqueue({
  name: "Doozy",
  type: "cat",
  age: 4,
});

console.log(animal.dequeue("cat"));
console.log(animal.dequeue("dog"));
