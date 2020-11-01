'use strict';

const treeImport = require('../Data-Structures/tree/tree');

describe('Binary Tree', () => {
  it('Can successfully instantiate an empty tree', () => {
    const tree = new treeImport.tree();

    expect(tree.root).toBeNull;
  });
  it('Can successfully instantiate a tree with a single root node', () => {
    const one = new treeImport.node(1);
    const tree = new treeImport.tree(one);

    expect(tree.root.value).toEqual(1);
  });
  it('Can successfully add a left child and right child to a single root node', () => {
    const one = new treeImport.node(3);
    const tree = new treeImport.search(one);
    tree.add(1);
    tree.add(5);

    expect(tree.root.left.value).toEqual(1);
    expect(tree.root.right.value).toEqual(5);
  });
  let tree;
  beforeEach(() => {
    const one = new treeImport.node(1);
    const two = new treeImport.node(2);
    const three = new treeImport.node(3);
    const four = new treeImport.node(4);
    const five = new treeImport.node(5);
    one.left = two;
    one.right = three;
    two.left = four;
    two.right = five;

    tree = new treeImport.tree(one);
  });
  it('Can successfully return a collection from a preorder traversal', () => {
    const expected = [1, 2, 4, 5, 3];
    const preOrder = tree.preOrder();
    expect(preOrder).toEqual(expected);
  });
  it('Can successfully return a collection from an inorder traversal', () => {
    const expected = [4, 2, 5, 1, 3];
    const preOrder = tree.inOrder();
    expect(preOrder).toEqual(expected);
  });
  it('Can successfully return a collection from a postorder traversal', () => {
    const expected = [4, 5, 2, 3, 1];
    const preOrder = tree.postOrder();
    expect(preOrder).toEqual(expected);
  });
  it('findMaximumValue method throw error if tree is empty', () => {
    const tree = new treeImport.tree();
    expect(() => {
      tree.findMaximumValue();
    }).toThrow();
  });
  it('findMaximumValue method return max value of tree', () => {

    expect(tree.findMaximumValue()).toEqual(5);
  });
});