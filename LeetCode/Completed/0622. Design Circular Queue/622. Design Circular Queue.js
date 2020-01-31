class MyCircularQueue {
  constructor(n) {
    this.size = n;
    this.arr = new Array(this.size); // Set queue to size 10;
    this.head = 0;
    this.tail = 0;
  }

  isEmpty()  { return this.head === this.tail }
  isFull()   { return this.tail-this.head >= this.size }
  getFront() { return this.isEmpty() ? -1 : this.arr[this.head] }
  getRear()  { return this.isEmpty() ? -1 : this.arr[this.tail-1] }
  getQueue() { return this.arr }
  getSize()  { return this.size }

  enqueue(x) {
    if(this.isFull()) {
      return false;
    } else { 
      this.arr[this.tail] = x;
      this.tail++;
      return true;
    }
  }

  dequeue() {
    if(this.isEmpty()) {
      return false;
    }
    this.head++;
    return true;
  }
}