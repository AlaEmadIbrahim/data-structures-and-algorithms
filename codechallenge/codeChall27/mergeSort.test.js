"use strict";

const mergeSort = require("./mergeSort");

describe("Merge Sort Tests", () => {
  test("If the array contains one element", () => {
    let arr = [8];
    let sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([8]);
  });

  test("If the array even in size", () => {
    let arr = [7, 0, -2, 8];
    let sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([-2, 0, 7, 8]);
  });

  test("If the array odd in size", () => {
    let arr = [1, 9, 3, -1, 5];
    let sortedArr = mergeSort(arr);
    expect(sortedArr).toEqual([-1, 1, 3, 5, 9]);
  });
});
