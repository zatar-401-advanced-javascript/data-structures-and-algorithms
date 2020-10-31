# Trees
recursively as a collection of nodes (starting at a root node), where each node is a data structure consisting of a value, together with a list of references to nodes (the "children"), with the constraints that no reference is duplicated, and none points to the root.

## Challenge
* Create a Node class that has properties for the value stored in the node, the left child node, and the right child node.
* Create a BinaryTree class
* * Define a method for each of the depth first traversals called preOrder, inOrder, and postOrder which returns an array of the values, ordered appropriately.
* * *Any exceptions or errors that come from your code should be semantic, capturable errors. For example, rather than a default error thrown by your language, your code should raise/throw a custom, semantic error that describes what went wrong in calling the methods you wrote for this lab.

* Create a BinarySearchTree class
* * Define a method named add that accepts a value, and adds a new node with that value in the correct location in the binary search tree.
* * Define a method named contains that accepts a value, and returns a boolean indicating whether or not the value is in the tree at least once.


## Approach & Efficiency
* preOrder, inOrder and postOrder used recursive function so I can follow the order i want and pushing into the array.
* add and contains it will check if the value equal root value if not to check lower and higher and keep checking until it find value for contains or it reach null and assign it for add.

## API
preOrder() => return array ordered in [ROOT - LEFT - RIGHT]

inOrder() => return array ordered in [LEFT- ROOT - RIGHT]

postOrder() => return array ordered in [LEFT - RIGHT - ROOT]

add(value) => adds a new node with that value in the correct location in the binary search tree.

contains(value) => returns a boolean indicating whether or not the value is in the tree