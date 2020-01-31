class Queue {
  constructor() {
    this.array = [];
    this.rear = 0;
  }

  isEmpty() {
    return this.array.length === 0;
  }

  peek() {
    return !this.isEmpty() ? this.array[0] : null
  }

  getQueue() {
    return this.array;
  }

  enqueue(x) {
    this.array[this.rear] = x;
    this.rear++;
  }

  // If you don't want to use shift, you can use a front pointer that increments
  // with rear so that our front shifts forward by one.
  dequeue() {
    this.rear--;
    return this.array.shift();
  }
}