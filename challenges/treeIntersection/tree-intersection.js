'use strict';


function tree_intersection(treeA,treeB){
  const results = {a:[],b:[],common:[]};
  
  const allValues = (node,arr) =>{
    arr.push(node.value);
    
    if(node.left) allValues(node.left,arr);
    if(node.right) allValues(node.right,arr);
  };
  allValues(treeA.root,results.a);
  allValues(treeB.root,results.b);
  
  results.a.map((number) =>{
    const check = results.b.includes(number);
    if(check) results.common.push(number);
  });
  
  return results.common;
}

// const {tree,node} = require('../../Data-Structures/tree/tree');

// const node1 = new node(1);
// const node2 = new node(2);
// const node3 = new node(3);
// const node4 = new node(4);

// node1.left=node2;
// node1.right=node3;
// node2.left=node4;

// const node11 = new node(11);
// const node22 = new node(2);
// const node33 = new node(33);
// const node44 = new node(4);

// node11.left=node22;
// node11.right=node33;
// node22.left=node44;

// const treeA = new tree(node1);
// const treeB = new tree(node11);

// console.log(tree_intersection(treeA,treeB));


module.exports = tree_intersection;