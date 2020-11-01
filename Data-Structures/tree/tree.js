'use strict';

class Node {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  preOrder() {
    if (!this.root) {
      throw 'Empty tree';
    }
    const results = [];
    const _walk = (node) => {
      results.push(node.value);
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  //  LEFT- ROOT - RIGHT
  inOrder() {
    if (!this.root) {
      throw 'Empty tree';
    }
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      results.push(node.value);
      if (node.right) _walk(node.right);
    };

    _walk(this.root);
    return results;
  }
  // LEFT - RIGHT - ROOT
  postOrder() {
    if (!this.root) {
      throw 'Empty tree';
    }
    const results = [];
    const _walk = (node) => {
      if (node.left) _walk(node.left);
      if (node.right) _walk(node.right);
      results.push(node.value);
    };

    _walk(this.root);
    return results;
  }
  findMaximumValue(){
    if (!this.root) {
      throw 'Empty tree';
    }
    const arr = this.preOrder();
    let max = this.root.value;

    for (let index = 0; index < arr.length; index++) {
      if(arr[index]>max){
        max = arr[index];
      }
    }
    return max;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      console.log('test1');
      this.root = node;
    }
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value == value) {
        throw 'Duplicate nodes';
      } else if (value < currentNode.value) {
        if(currentNode.left == null){
          currentNode.left = node;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if(currentNode.right == null){
          currentNode.right = node;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  contains(value){
    if (!this.root) {
      throw 'Empty tree';
    }
    let currentNode = this.root;

    while(currentNode){
      if (currentNode.value == value) {
        return true;
      }else if (value < currentNode.value){
        if(currentNode.left == null){
          return false;
        }
        currentNode = currentNode.left;
      }else{
        if(currentNode.right == null){
          return false;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

module.exports = {tree:BinaryTree, search:BinarySearchTree, node:Node};
// const test1 = new Node(5);
// const test2 = new Node(99);
// const test3 = new Node(6);
// const test4 = new Node(2);

// test1.left = test2;
// test1.right = test3;
// test2.left = test4;

// const test = new BinaryTree(test1);
// test.add(1);
// test.add(4);a
// console.log(test.findMaximumValue());