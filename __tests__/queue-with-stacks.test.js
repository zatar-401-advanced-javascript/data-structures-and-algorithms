'use strict';

const queueWithStacks = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Queue with Stacks',()=>{
  it('can enqueue on stack',()=>{
    const qws = new queueWithStacks();
    qws.enqueue(1);
    expect(qws.stack.top.value).toEqual(1);
  });
  it('can dequeue from stack',()=>{
    const qws = new queueWithStacks();
    qws.enqueue(1);
    qws.enqueue(2);
    qws.dequeue();
    qws.dequeue();
    expect(qws.stack.top).toBeNull();
  });
  it(`can't dequeue from empty stack`,()=>{
    const qws = new queueWithStacks();
    qws.dequeue();
    expect(qws.dequeue()).toEqual('Empty stack');
  });
});