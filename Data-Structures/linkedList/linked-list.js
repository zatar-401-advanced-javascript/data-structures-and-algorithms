'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    if (!value) {
      throw console.log('Invalid value!');
    }
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    while (currentNode.pointer) {
      currentNode = currentNode.pointer;
    }
    
    currentNode.pointer = node;
    
    return this;
    
  }

  includes(value) {
    if (!value) {
      throw console.log('Empty value, you need to put value to use this method :)');
    }
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      } else {
        currentNode = currentNode.pointer;
      }
    }
    return false;
  }

  toString() {
    
    let currentNode = this.head;
    let allValues = [];
    let msg = '';
    if (!currentNode) {
      throw console.log('No values in the linked list :(');
    }
    while (currentNode) {
      allValues.push(currentNode.value);
      msg = msg.concat(`{ ${currentNode.value} } -> `);
      currentNode = currentNode.pointer;
    }
    msg = msg.concat(`NULL`);
    return msg;
  }

  append(value){
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;

    

    while (currentNode.pointer) {
      currentNode = currentNode.pointer;
    }
    currentNode.pointer = node;
    
    return this;
  }

  insertBefore(value, newVal){
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    if(currentNode.value == value){
      node.pointer = currentNode.pointer;
      this.head = node;
      return this;
    }

    while (currentNode.pointer) {
      if(currentNode.pointer == null){
        return undefined;
      }
      if(currentNode.pointer.value == value){
        node.pointer = currentNode.pointer;
        currentNode.pointer = node;
        return this;
      }
      currentNode = currentNode.pointer;
    }
    return this; 
  }

  insertAfter(value, newVal){
    const node = new Node(newVal);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;

    while (currentNode.value != value) {
      if(currentNode.pointer == null){
        return undefined;
      }
      currentNode = currentNode.pointer;
    }
    node.pointer = currentNode.pointer;
    currentNode.pointer = node;
    return this;
    // console.log('after',node);
  }
}

module.exports = LinkedList;
const ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insertBefore(1,99);
ll.insertAfter(55,88);
console.log(ll.toString());

