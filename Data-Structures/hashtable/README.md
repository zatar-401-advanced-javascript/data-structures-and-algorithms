# Hashtables
Hashtables are a data structure that utilize key value pairs. This means every Node or Bucket has both a key, and a value.

## Challenge
* add: takes in both the key and value. This method should hash the key, and add the key and value pair to the table, handling collisions as needed.
* get: takes in the key and returns the value from the table.
* contains: takes in the key and returns a boolean, indicating if the key exists in the table already.
* hash: takes in an arbitrary key and returns an index in the collection.

## Approach & Efficiency
Big O time for get method is O(n)
Big O time for other methods is O(1)
Big O space for all O(n)

## API
* add(key,value) => add the key and value pair to the table.
* get(key) => returns the value from the table.
* contains(key) => returns a boolean, indicating if the key exists in the table already.
* hash(key) => returns an index in the collection.