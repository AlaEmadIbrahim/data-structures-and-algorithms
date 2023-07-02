const Stack = require("./stack");

const newStack = new Stack();

newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

console.log(newStack.peek());
newStack.pop();
console.log(newStack.peek()); 

