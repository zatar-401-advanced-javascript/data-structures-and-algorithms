'use strict';
const importStacks = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');
// const stacks = new importStacks.stack();

class PseudoQueue{
  constructor(){
    this.stack = new importStacks.stack();
    this.backup = new importStacks.stack();
  }

  enqueue(value){
    this.stack.push(value);
    // this.stack2.push(value);
    return this;
  }
  dequeue(){
    // if(this.stack1.top == null || this.stack2.top == null){
    //   return 'Empty stack';
    // }
    let currentNode = this.stack.top;
    while(currentNode != null){
      this.backup.push(currentNode.value);
      currentNode = currentNode.pointer;
    }
    const popedValue = this.backup.pop();
    // console.log(this.backup);

    let currentBackupNode = this.backup.top;
    this.stack = new importStacks.stack();
    while(currentBackupNode != null){
      this.stack.push(currentBackupNode.value);
      currentBackupNode = currentBackupNode.pointer;
    }

    // this.stack = this.backup;
    this.backup = new importStacks.stack();
    return popedValue;

  }

}

// const queue = new PseudoQueue();

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.dequeue();
// queue.dequeue();

module.exports = PseudoQueue;
