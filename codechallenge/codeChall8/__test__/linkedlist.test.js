"use strict";

const LinkedList = require("../lib/linkedlist");

describe("Linked List Test", () => {
  test("k is greater than the length of the linked list", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.kthFromEnd(4);
    expect(ll.length).toBe(2);
    expect(ll.kthFromEnd(4)).toBe("Exception");
  });

  test("k and the length of the list are the same", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.kthFromEnd(2);
    expect(ll.length).toBe(2);
    expect(ll.kthFromEnd(2)).toBe(1);
  });

  test("k is not a positive integer", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    expect(ll.kthFromEnd(-1)).toBe("Exception");
  });

  test("Linked list is of a size 1", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);

    expect(ll.length).toBe(1);
    expect(ll.kthFromEnd(0)).toBe(1);
  });

  test("k is not at the end, it will be in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.insertAtEnd(1);
    ll.insertAtEnd(2);
    ll.insertAtEnd(3);
    ll.kthFromEnd(1);
    expect(ll.length).toBe(3);
    expect(ll.kthFromEnd(1)).toBe(2);
  });
});
