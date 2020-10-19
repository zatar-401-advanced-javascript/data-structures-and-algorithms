'use strict';

const LinkedList = require('../Data-Structures/linkedList/linked-list');

describe('Linked List',() =>{
  it('LinkedList can successfully instantiate an empty linked list',()=>{
    const ll = new LinkedList();
    expect(ll.head).toBeNull();
  });
  it('insert(value) Can properly insert into the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    expect(ll.head.value).toEqual(1);
  });
  it('insert(value) The head property will properly point to the first node in the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    expect(ll.head.pointer.value).toEqual(2);
  });
  it('insert(value) Can properly insert multiple nodes into the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.insert(4);
    ll.insert(5);
    expect(ll.head.pointer.pointer.pointer.value).toEqual(2);
  });
  it('includes(value) Will return true when finding a value within the linked list that exists',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    const found = ll.includes(2);
    expect(found).toBeTruthy;
  });
  it('includes(value) Will return false when searching for a value in the linked list that does not exist',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    const found = ll.includes(4);
    expect(found).toBeFalsy;
  });
  it('toString() Can properly return a collection of all the values that exist in the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    const allVal = ll.toString();
    expect(allVal).toEqual('{ 1 } -> { 2 } -> { 3 } -> NULL');
  });
  it('append(value) Can successfully add a node to the end of the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.append(4);
    expect(ll.head.pointer.pointer.value).toEqual(4);
  });
  it('append(value) Can successfully add multiple nodes to the end of a linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.insert(2);
    ll.append(4);
    ll.append(5);
    expect(ll.head.pointer.pointer.pointer.value).toEqual(5);
  });
  it('insertBefore(value,newVal) Can successfully insert a node before a node located i the middle of a linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.insertBefore(3,99);
    expect(ll.head.pointer.pointer.value).toEqual(99);
  });
  it('insertBefore(value,newVal) Can successfully insert a node before the first node of a linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.insertBefore(1,99);
    expect(ll.head.value).toEqual(99);
  });
  it('insertAfter(value,newVal) Can successfully insert after a node in the middle of the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.insertAfter(2,99);
    expect(ll.head.pointer.pointer.value).toEqual(99);
  });
  it('insertAfter(value,newVal) Can successfully insert a node after the last node of the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    ll.insertAfter(3,99);
    expect(ll.head.pointer.pointer.pointer.value).toEqual(99);
  });
  it('kthFromEnd(k) where k is greater than the length of the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    expect(ll.kthFromEnd(4)).toEqual('Exception');

  });
  it('kthFromEnd(k) where k and the length of the list are the same',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    expect(ll.kthFromEnd(3)).toEqual('Exception');
  });
  it('kthFromEnd(k) where k is not a positive integer',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    expect(ll.kthFromEnd(-4)).toEqual('Exception');
  });
  it('kthFromEnd(k) where the linked list is of a size 1',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    expect(ll.kthFromEnd(0)).toEqual(1);
  });
  it('kthFromEnd(k) where k is not at the end, but somewhere in the middle of the linked list',()=>{
    const ll = new LinkedList();
    ll.insert(1);
    ll.append(2);
    ll.append(3);
    expect(ll.kthFromEnd(1)).toEqual(2);
  });
});