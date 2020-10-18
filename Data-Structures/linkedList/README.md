# Singly Linked List
Linked list is a linear collection of data elements whose order is not given by their physical placement in memory.

## Challenge
Create a Node class that has properties for the value stored in the Node, and a pointer to the next Node.
Within your LinkedList class, include a head property. Upon instantiation, an empty Linked List should be created.
Define a method called insert which takes any value as an argument and adds a new node with that value to the head of the list with an O(1) Time performance.
Define a method called includes which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
Define a method called toString (or __str__ in Python) which takes in no arguments and returns a string representing all the values in the Linked List, formatted as:
"{ a } -> { b } -> { c } -> NULL"


## Approach & Efficiency
- Create Node class which has properties for value and pointer.
- Create LinkedList class has property for head.
- Create insert method which takes any value as an argument and adds a new node with that value to the head if there it was null, so if you insert another value it will loop until it reach to finall pointer which has null value and place the new node.
- Create includes method which takes any value as an argument and returns a boolean result depending on whether that value exists as a Node’s value somewhere within the list.
- Create toString method which takes in no arguments and returns a string representing all the values in the Linked List, it will take the value of the node and push it into array then add it to our message, until we reach to finall node and return the message formatted as "{ a } -> { b } -> { c } -> NULL"

## API
* insert(value) => Insert value into Linked List.
* include(value) => Check if the value is in the Linked List.
* toString() => Representing all the values in the Linked List.
* append(value) => Adds a new node with the given value to the end of the list.
* insertBefore(value, newVal) => Add a new node with the given newValue immediately before the first value node.
* insertAfter(value, newVal) => Add a new node with the given newValue immediately after the first value node

## Solution
![whiteboard](https://raw.githubusercontent.com/zatar-401-advanced-javascript/data-structures-and-algorithms/main/assets/linkedList.png)
