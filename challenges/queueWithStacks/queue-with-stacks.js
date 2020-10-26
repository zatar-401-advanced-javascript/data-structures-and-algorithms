'use strict';
const importStacks = require('../../Data-Structures/stacksAndQueues/stacks-and-queues');
const stacks = new importStacks.stack();

class PseudoQueue{
  constructor(){
    this.stack1 = new importStacks.stack();
    this.stack2 = new importStacks.stack();
  }

  enqueue(value){
    this.stack1.push(value);
    this.stack2.push(value);
    return this;
  }
  dequeue(){
    if(this.stack1.top == null || this.stack2.top == null){
      return 'Empty stack';
    }

    const popedValue1 = this.stack1.value;
    this.stack1.pop();
    const popedValue2 = this.stack2.value;
    this.stack2.pop();
    this.stack1.top = this.stack1.top.pointer;
    this.stack2.top = this.stack2.top.pointer;
    return {popedValue1,popedValue2};
  }

}

module.exports = PseudoQueue;
