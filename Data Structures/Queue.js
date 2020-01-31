/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.size = k;
  this.arr = new Array(this.size);
  this.head = 0;
  this.tail = 0;
};

/**
* Insert an element into the circular queue. Return true if the operation is successful. 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if(this.isFull()) {
      return "false, the queue is full";
  } else {
      this.arr[this.tail] = value;
      this.tail++;
      return true;
  }
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if(this.isEmpty()) {
      return false;
  }
  this.head++;
  return true;
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.isEmpty() ? -1 : this.arr[this.head]
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.isEmpty() ? -1 : this.arr[this.tail-1];
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.head === this.tail
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.tail-this.head >= this.size;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

var obj = new MyCircularQueue(3);
console.log(obj.enQueue(1))
console.log(obj.enQueue(2))
console.log(obj.enQueue(3))
console.log(obj.enQueue(4))
console.log(obj.Rear())
console.log(obj.isFull())
console.log(obj.deQueue())
console.log(obj.enQueue(4))
console.log(obj.Rear())

if(true) {
  console.log(false);
}