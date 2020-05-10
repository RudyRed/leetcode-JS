// Design a stack that supports push, pop, top, and retrieving the minimum element
// in constant time.
//
// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
//
// Example:
// MinStack minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// minStack.getMin();   --> Returns -3.
// minStack.pop();
// minStack.top();      --> Returns 0.
// minStack.getMin();   --> Returns -2.

/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this._valStorage = [];
  this._localMin = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._valStorage.push(x);

  if (this._localMin.length && x > this._localMin[this._localMin.length - 1]) {
    this._localMin.push(this._localMin[this._localMin.length - 1]);
  } else {
    this._localMin.push(x);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._valStorage.pop();
  this._localMin.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._valStorage.length ? this._valStorage[this._valStorage.length - 1] : null;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._localMin.length ? this._localMin[this._localMin.length - 1] : null;
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();  // --> Returns -3.
minStack.pop();
minStack.top(); //     --> Returns 0.
minStack.getMin(); //  --> Returns -2.
