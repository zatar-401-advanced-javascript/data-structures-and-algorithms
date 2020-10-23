'use strict';

class Node{
  constructor(value){
    this.value = value;
    this.pointer = null;
  }
}

class Stack{
  constructor(){
    this.top = null;
  }

  push(value){
    const node = new Node(value);
    node.pointer = this.top;
    this.top = node;
    return this;
  }

  pop(){
    if(this.top == null){
      return 'Empty stack';
    }
    const popedValue = this.top.value;
    this.top = this.top.pointer;
    return popedValue;
  }

  peek(){
    if(this.top == null){
      return 'Empty stack';
    }

    return this.top.value;
  }
  
  isEmpty(){
    return this.top ? false:true;
  }
}

class Queue{
  constructor(){
    this.front = null;
  }

  enqueue(value){
    const node = new Node(value);
    if(this.front == null){
      this.front = node;
      return this;
    }

    let currentNode = this.front;
    while (currentNode.pointer){
      currentNode = currentNode.pointer;
    }
    currentNode.pointer = node;
    return this;
  }

  dequeue(){
    if(this.front == null){
      return 'Empty queue';
    }

    const dequeuedValue = this.front.value;
    this.front = this.front.pointer;

    return dequeuedValue;
  }

  peek(){
    return this.front ? this.front.value : 'Empty queue';
  }

  isEmpty(){
    return this.front ? false:true;
  }
}

// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// console.log(stack);
// stack.pop();
// console.log(stack);
// console.log(stack.peek());
// console.log(stack.isEmpty());

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// console.log(queue);
// queue.dequeue();
// console.log(queue);
// console.log(queue.peek());
// console.log(queue.isEmpty());

module.exports ={stack:Stack, queue: Queue};