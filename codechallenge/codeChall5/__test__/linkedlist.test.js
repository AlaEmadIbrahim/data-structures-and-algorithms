'use strict';

const LinkedList = require('../lib/linkedlist');

describe("Linked List Tests", () => {
  test("Can successfully instantiate an empty linked list", () => {
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
  test("Can properly insert into the linked list", (() => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    expect(ll.head.value).toBe(1);
    expect(ll.head.next.next).toBeNull();
    expect(ll.length).toBe(2);

  }))

  test("The head property will properly point to the first node in the linked list", (()=> {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.head.value).toEqual(1);

  }))

  test("Can properly insert multiple nodes into the linked list",()=>{
    const ll=new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.head.value).toEqual(1);
    expect(ll.head.next.value).toEqual(2);
    expect(ll.head.next.next.value).toEqual(3);
    expect(ll.length).toBe(3);
})
  test('Will return true when finding a value within the linked list that exists or Will return false when searching for a value in the linked list that does not exist', (() => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.includes(2)).toBe(true);
    expect(ll.includes(4)).toBe(false);
  }))
  test("Can properly return a collection of all the values that exist in the linked list", () => {
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    expect(ll.tostring()).toEqual("{1} -> {2} -> {3} -> ");
  });
})