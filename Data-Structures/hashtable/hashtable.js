'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  prepend(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    return this.head;
  }

}

class HashMap {
  constructor(size) {
    this.size = size;
    this.storage = new Array(size);
  }

  hash(key) {
    const sumCharCode = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt(0);
    }, 0);
    const hashKey = (sumCharCode * 19) % this.size;
    return hashKey;
  }

  add(key, value) {
    const index = this.hash(key);

    if (!this.storage[index]) {
      const ll = new LinkedList();
      ll.prepend({ [key]: value });
      this.storage[index] = ll;
    } else {
      this.storage[index].prepend({ [key]: value });
    }
  }

  contains(key) {
    const index = this.hash(key);
    return this.storage[index] ? true : false;
  }

  get(key) {
    const index = this.hash(key);
    let currentNode;
    this.storage[index] ? currentNode = this.storage[index].head : currentNode = null;
    
    if (!currentNode) {
      return null;
    }
    
    while (currentNode) {
      const obj = Object.keys(currentNode.value);

      if (obj[0] == key) {
        return currentNode.value[key];
      } else {
        currentNode = currentNode.next;
      }
    }
    return null;
  }
}

module.exports = HashMap;

// const hashmap = new HashMap(400);
// hashmap.add('name', 'abd');
// hashmap.add('one', 'thing');
// hashmap.add('one', 'thing');
// hashmap.add('eno', '1');
// hashmap.add('neo', '2');
// hashmap.add('this', 'nothing');
// console.log(hashmap.storage);
// console.log(hashmap.contains('test'));
// console.log(hashmap.get('one'));