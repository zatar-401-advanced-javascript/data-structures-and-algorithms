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
    // let oldHead = new Node(this.head.value);
    // oldHead.pointer = this.head.pointer;
    // node.pointer = oldHead;
    // this.head = node;
    node.pointer = this.head;
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
    // let allValues = [];
    let msg = '';
    if (!currentNode) {
      throw console.log('No values in the linked list :(');
    }
    while (currentNode) {
      // allValues.push(currentNode.value);
      msg = msg + `{ ${currentNode.value} } -> `;
      currentNode = currentNode.pointer;
    }
    msg = msg + `NULL`;
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

    while (currentNode) {
      // if (currentNode.pointer == null) {
      //   return undefined;
      // }
      if (currentNode.value == value) {
        node.pointer = currentNode.pointer;
        currentNode.pointer = node;
        return this;
      }
      currentNode = currentNode.pointer;
    }
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

const llA = new LinkedList();
const llB = new LinkedList();
llA.append(1);
llA.append(3);
llA.append(7);
llB.append(2);
llB.append(3);
llB.append(5);
llB.append(9);

// 1-2-3-3-5-7-9

function mergeSort(llA, llB) {

  let newLL = new LinkedList();
  let currentA = llA.head;
  let currentB = llB.head;

  while (currentA || currentB) {
    if (!currentA) {
      newLL.append(currentB.value);
      currentB = currentB.pointer;
    } else if (!currentB) {
      newLL.append(currentA.value);
      currentA = currentA.pointer;
    } else {
      if (currentA.value >= currentB.value) {
        newLL.append(currentB.value);
        currentB = currentB.pointer;
      } else if (currentB.value >=   currentA.value) {
        newLL.append(currentA.value);
        currentA = currentA.pointer;
      }
    }
  }
  return newLL;

}
const result = mergeSort(llA,llB);
console.log(result.toString());