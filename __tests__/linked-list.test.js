'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list');

describe('Linked List',() =>{
  it('Can successfully instantiate an empty linked list',()=>{
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
  it('Can properly insert into the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
  });
  it('The head property will properly point to the first node in the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    expect(ll.head.pointer.value).toEqual(2);
  });
  it('Can properly insert multiple nodes into the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(4);
    ll.insert(5);
    expect(ll.head.pointer.pointer.pointer.value).toEqual(5);
  });
  it('Will return true when finding a value within the linked list that exists',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    const found = ll.includes(2);
    expect(found).toBeTruthy;
  });
  it('Will return false when searching for a value in the linked list that does not exist',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    const found = ll.includes(4);
    expect(found).toBeFalsy;
  });
  it('Can properly return a collection of all the values that exist in the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(3);
    const allVal = ll.toString();
    expect(allVal).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
});