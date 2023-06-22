"use strict";

const LinkedList = require("./lib/linked-list-kth");

const ll = new LinkedList();

ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.tostring();
console.log(ll.length);
console.log(ll.tostring());
console.log(ll.kthFromEnd(2));
