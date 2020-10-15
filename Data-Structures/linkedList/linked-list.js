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
}

module.exports = LinkedList;
// const ll = new LinkedList();
// // ll.insert();
// ll.insert(2);
// // ll.insert(3);
// ll.toString();
// // ll.includes();