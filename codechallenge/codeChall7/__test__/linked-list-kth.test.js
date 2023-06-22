"use strict";

const LinkedList = require("../lib/linked-list-kth");

describe("Linked List Tests", () => {
    
  test("Where k is greater than the length linked list", () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.kthFromEnd(4);
    expect(ll.length).toBe(2);
    expect(ll.kthFromEnd(4)).toBe("Exception");
  });

  test("Where k and the length of the list are the same", () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.kthFromEnd(2);
    expect(ll.length).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(1);

  });

  test("Where k is not a positive integer", () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    expect(ll.kthFromEnd(-1)).toBe("Exception");
  });

  test("Where the linked list is of a size 1", () => {
    const ll = new LinkedList();
    ll.insert(1);

    expect(ll.length).toBe(1);
    expect(ll.kthFromEnd(0)).toBe(1);
  });

  test("where k is not at the end, but somewhere in the middle linked list", () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    ll.kthFromEnd(1);
    expect(ll.length).toBe(3);
    expect(ll.kthFromEnd(1)).toBe(2);
  });
});
