'use strict';

const stacksAndQueues = require('../Data-Structures/stacksAndQueues/stacks-and-queues');

describe('Stack and a Queue',() =>{
  describe('Stack Testing', () =>{
    it('Can successfully push onto a stack', () =>{
      const stack = new stacksAndQueues.stack();
      stack.push(1);
      expect(stack.top.value).toEqual(1);
    });
    it('Can successfully push multiple values onto a stack', () =>{
      const stack = new stacksAndQueues.stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.top.value).toEqual(3);
      expect(stack.top.pointer.value).toEqual(2);
    });
    it('Can successfully pop off the stack', () =>{
      const stack = new stacksAndQueues.stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.top.value).toEqual(2);
    });
    it('Can successfully empty a stack after multiple pops', () =>{
      const stack = new stacksAndQueues.stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      expect(stack.top).toBeNull;
    });
    it('Can successfully peek the next item on the stack', () =>{
      const stack = new stacksAndQueues.stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);
      const peek = stack.peek();
      expect(peek).toEqual(3);
    });
    it('Can successfully instantiate an empty stack', () =>{
      const stack = new stacksAndQueues.stack();
      expect(stack.top).toBeNull();
    });
    it('Calling pop or peek on empty stack raises exception', () =>{
      const stack = new stacksAndQueues.stack();
      expect(stack.peek()).toEqual('Empty stack');
      expect(stack.isEmpty()).toBeTruthy();
      stack.push(1);
      expect(stack.isEmpty()).toBeFalsy();
    });
  });

  describe('Queue Testing', () =>{
    
    it('Can successfully enqueue into a queue',() =>{
      const queue = new stacksAndQueues.queue();
      queue.enqueue(1);
      expect(queue.front.value).toEqual(1);
    });
    it('Can successfully enqueue multiple values into a queue',() =>{
      const queue = new stacksAndQueues.queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.front.value).toEqual(1);
      expect(queue.front.pointer.value).toEqual(2);
      expect(queue.front.pointer.pointer.value).toEqual(3);
    });
    it('Can successfully dequeue out of a queue the expected value',() =>{
      const queue = new stacksAndQueues.queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.dequeue()).toEqual(1);
    });
    it('Can successfully peek into a queue, seeing the expected value',() =>{
      const queue = new stacksAndQueues.queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).toEqual(1);
    });
    it('Can successfully empty a queue after multiple dequeues',() =>{
      const queue = new stacksAndQueues.queue();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      queue.dequeue();
      queue.dequeue();
      expect(queue.front).toBeNull();
    });
    it('Can successfully instantiate an empty queue',() =>{
      const queue = new stacksAndQueues.queue();
      expect(queue.front).toBeNull;
    });
    it('Calling dequeue or peek on empty queue raises exception',() =>{
      const queue = new stacksAndQueues.queue();
      expect(queue.dequeue()).toEqual('Empty queue');
      expect(queue.isEmpty()).toBeTruthy();
      queue.enqueue(3);
      expect(queue.isEmpty()).toBeFalsy();
    });
  });
});