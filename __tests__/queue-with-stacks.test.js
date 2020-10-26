'use strict';

const queueWithStacks = require('../challenges/queueWithStacks/queue-with-stacks');

describe('Queue with Stacks',()=>{
  it('can enqueue on stack',()=>{
    const qws = new queueWithStacks();
    qws.enqueue(1);
    expect(qws.stack1.top.value).toEqual(1);
    expect(qws.stack2.top.value).toEqual(1);
  });
  it('can dequeue from stack',()=>{
    const qws = new queueWithStacks();
    qws.enqueue(1);
    qws.enqueue(2);
    qws.dequeue();
    expect(qws.stack1.top).toBeNull();
    expect(qws.stack2.top).toBeNull();
  });
  it(`can dequeue from stack`,()=>{
    const qws = new queueWithStacks();
    qws.dequeue();
    expect(qws.dequeue()).toEqual('Empty stack');
  });
});