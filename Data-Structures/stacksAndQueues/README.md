# Stacks and Queues
A **stack** is a data structure that consists of Nodes. Each Node references the next Node in the stack, but does not reference its previous.
A **queue** is a linear data structure. Unlike a stack, a queue deletes only the oldest added data.

## Challenge
* Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.
* Create a Stack class that has a top property. It creates an empty Stack when instantiated.
* This object should be aware of a default empty value assigned to top when the stack is created.
* Define a method called push which takes any value as an argument and adds a new node with that value to the top of the stack with an O(1) Time performance.
* Define a method called pop that does not take any argument, removes the node from the top of the stack, and returns the node’s value.
* Should raise exception when called on empty stack
* Define a method called peek that does not take an argument and returns the value of the node located on top of the stack, without removing it from the stack.
* Should raise exception when called on empty stack
* Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the stack is empty.
* Create a Queue class that has a front property. It creates an empty Queue when instantiated.
* This object should be aware of a default empty value assigned to front when the queue is created.
* Define a method called enqueue which takes any value as an argument and adds a new node with that value to the back of the queue with an O(1) Time performance.
* Define a method called dequeue that does not take any argument, removes the node from the front of the queue, and returns the node’s value.
* Should raise exception when called on empty queue
* Define a method called peek that does not take an argument and returns the value of the node located in the front of the queue, without removing it from the queue.
* Should raise exception when called on empty queue
* Define a method called isEmpty that takes no argument, and returns a boolean indicating whether or not the queue is empty.


## Approach & Efficiency
#### Approach
* **Stack**: 
* * First created class that has a top property. It creates an empty Stack when instantiated.
* * Defined push method take any value as argument and adds new node with that value to the top of the stack and move the old top to the node pointer.
* * Defined pop method check if the top empty it return Empty stack if not define popedValue to equal the value of the top of the stack and change the top to the pointer of the top and return the popedValue
* * Defined peek method which check if the top empty it retun Empty stack if not return the top value.
* * Defined isEmpty method return true if the top of stack is null and return false if it's defined.

* **Queue**: 
* * First created class that has a front property. It creates an empty Queue when instantiated.
* * Defined enqueue method take any value as argument and adds new node with that value to the rear of the queue, if the front is empty we will assign the node in the front of the queue and return if not we will define currentNode which will be the front and create while loop check if the pointer avalible or not if yes then we change currentNode to its pointer until it reach to rear of the queue, then we assign the currentNode pointer to equal the node and return this.
* * Defined dequeue method check if the front empty it return Empty queue if not define queuedValue to equal the value of the front of the queue and change the front to the pointer of the front and return the queuedValue
* * Defined peek method which check if the top empty it retun Empty queue if not return the top value.
* * Defined isEmpty method return true if the top of stack is null and return false if it's defined.

#### Big O
* **Time**: O(1)
* **Space**: O(1) for push and enqueue.

## API
### **Stack**:
* **push(value)**: Pushing a Node onto a stack
* **pop()**: Popping a Node off a stack is the action of removing a Node from the top.
* **peek()**: When conducting a peek, you will only be inspecting the top Node of the stack.
* **isEmpty()**: Return boolen if the stack is empty or not. 

### **Queue**:
* **enqueue(value)**: When you add an item to a queue, you use the enqueue action.
* **dequeue()**: When you remove an item from a queue, you use the dequeue action.
* **peek()**: When conducting a peek, you will only be inspecting the front Node of the queue.
* **isEmpty()**: Return boolen if the queue is empty or not. 