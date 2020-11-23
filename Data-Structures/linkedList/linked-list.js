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
    this.length = 0;
  }

  insert(value) {
    if (!value) {
      throw console.log('Invalid value!');
    }
    const node = new Node(value);
    this.length++;
    if (!this.head) {
      this.head = node;
      return this;
    }
    let oldHead = new Node(this.head.value);
    oldHead.pointer = this.head.pointer;
    node.pointer = oldHead;
    this.head = node;

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

  append(value) {
    const node = new Node(value);
    this.length++;

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

  insertBefore(value, newVal) {
    const node = new Node(newVal);
    this.length++;
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;
    if (currentNode.value == value) {
      node.pointer = currentNode.pointer;
      this.head = node;
      return this;
    }

    while (currentNode.pointer) {
      if (currentNode.pointer == null) {
        return undefined;
      }
      if (currentNode.pointer.value == value) {
        node.pointer = currentNode.pointer;
        currentNode.pointer = node;
        return this;
      }
      currentNode = currentNode.pointer;
    }
    return this;
  }

  insertAfter(value, newVal) {
    const node = new Node(newVal);
    this.length++;
    if (!this.head) {
      this.head = node;
      return this;
    }
    let currentNode = this.head;

    while (currentNode.value != value) {
      if (currentNode.pointer == null) {
        return undefined;
      }
      currentNode = currentNode.pointer;
    }
    node.pointer = currentNode.pointer;
    currentNode.pointer = node;
    return this;
  }
  kthFromEnd(k) {
    let currentNode = this.head;
    let counter = this.length - 1;

    if ((k < 0) || (k > counter)) {
      return 'Exception';
    }
    while (counter != k) {
      counter--;
      currentNode = currentNode.pointer;
    }
    return currentNode.value;
    // if((k<0) || (k>counter)){
    //   return 'Exception';
    // } 
    // let p = this.head;
    // let f = this.head;
    // let n = 1;
    // while(n<=(k-1)){
    //   f=f.pointer;
    //   n+=1;
    // }
    // while(f.pointer!=null){
    //   p=p.pointer;
    //   f=f.pointer;
    // }
    // return p.value;
  }
  // [1,2,3,4]
  // nextNode =  null
  // prevNode = {4,{3,[{2,[1]}]}}
  // ll = null
  reverse() {
    let prevNode = null;

    while (this.head == null) {
      let nextNode = this.head.pointer;
      this.head.pointer = prevNode;
      prevNode = this.head;
      this.head = nextNode;
    }
    this.head = prevNode;
    // console.log(prevNode);
  }
}

module.exports = LinkedList;
// const ll = new LinkedList();
// ll.append(1);
// console.log(ll.toString());
// ll.append(2);
// console.log(ll.toString());
// ll.append(3);
// ll.append(4);
// ll.append(5);
// ll.append(6);
// ll.append(7);
// console.log(ll.kthFromEnd(7));
// ll.reverse();
// console.log(ll.head);
// ll.append(2);
// ll.append(3);
// ll.append(4);
// console.log(ll.toString());
// console.log(ll.kthFromEnd(3));
// ll.insertBefore(1,99);
// ll.insertAfter(2,99);

