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
  findMaximumValue() {
    if (!this.root) {
      throw 'Empty tree';
    }
    const arr = this.preOrder();
    let max = this.root.value;

    for (let index = 0; index < arr.length; index++) {
      if (arr[index] > max) {
        max = arr[index];
      }
    }
    return max;
  }

  //RESULT: 2 7 5 2 6 9 5 11 4
  //SAVED: [7][5][2][6][9][5][11][4]
  // COUNTER: 8
  breadthFirst() {
    if (!this.root) {
      throw 'Empty tree';
    }

    const results = [];
    let saved = [];
    let counter = -1;

    results.push(this.root.value);
    const _walk = (node) => {
      if(node == undefined){
        // console.log(results);
        return results;
      }
      counter++;      
      if (node.left) {
        results.push(node.left.value);
        saved.push(node.left);
      }
      if (node.right) {
        results.push(node.right.value);
        saved.push(node.right);
      }
      _walk(saved[counter]);
    };

    _walk(this.root);
    return results;
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
        if (currentNode.left == null) {
          currentNode.left = node;
          return this;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right == null) {
          currentNode.right = node;
          return this;
        }
        currentNode = currentNode.right;
      }
    }
  }

  contains(value) {
    if (!this.root) {
      throw 'Empty tree';
    }
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.value == value) {
        return true;
      } else if (value < currentNode.value) {
        if (currentNode.left == null) {
          return false;
        }
        currentNode = currentNode.left;
      } else {
        if (currentNode.right == null) {
          return false;
        }
        currentNode = currentNode.right;
      }
    }
  }
}

module.exports = { tree: BinaryTree, search: BinarySearchTree, node: Node };
// const test1 = new Node(2);
// const test2 = new Node(7);
// const test3 = new Node(5);
// const test4 = new Node(2);
// const test5 = new Node(6);
// const test6 = new Node(9);
// const test7 = new Node(5);
// const test8 = new Node(11);
// const test9 = new Node(4);

// test1.left = test2;
// test1.right = test3;
// test2.left = test4;
// test2.right = test5;
// test3.right = test6;
// test5.left = test7;
// test5.right = test8;
// test6.left = test9;

// const test = new BinaryTree(test1);
// const test999 = test.breadthFirst();
// console.log(test999);
// test.add(1);
// test.add(4);a
// console.log(test.findMaximumValue());