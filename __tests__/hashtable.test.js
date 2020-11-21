'use strict';

const hashtable = require('../Data-Structures/hashtable/hashtable');

let hashmap;
let index;
describe('Hash Table',()=>{
  beforeEach(() => {
    hashmap = new hashtable(400);
    hashmap.add('name','abd');
    index = hashmap.hash('name');
  });
  it('Adding a key/value to your hashtable results in the value being in the data structure',() =>{
    // const hashmap = new hashtable(400);
    // hashmap.add('name','abd');
    // const index = hashmap.hash('name');
    expect(hashmap.storage[index].head.value['name']).toEqual('abd');
  });

  it('Retrieving based on a key returns the value stored',() =>{
    expect(hashmap.get('name')).toEqual('abd');
  });

  it('Successfully returns null for a key that does not exist in the hashtable',() =>{
    expect(hashmap.get('nameee')).toBeNull();
  });

  it('Successfully handle a collision within the hashtable',() =>{
    hashmap.add('naem','bader');
    const collision = hashmap.hash('naem');
    // name index is same naem index and successfully handle it using linked list
    expect(index).toEqual(collision);
  });

  it('Successfully retrieve a value from a bucket within the hashtable that has a collision',() =>{
    hashmap.add('naem','bader');
    //successfully handle it using linked list
    expect(hashmap.get('name')).toEqual('abd');
  });

  it('Successfully hash a key to an in-range value',() =>{
    const inRange1 = hashmap.hash('ddefafafa eghragragaragagargargaarg');
    const inRange2 = hashmap.hash('test test test 99964578');
    const inRange3 = hashmap.hash('12354678933.2482');
    //Never over the size of the hashmap
    expect(inRange1).toBeLessThanOrEqual(400);
    expect(inRange2).toBeLessThanOrEqual(400);
    expect(inRange3).toBeLessThanOrEqual(400);
  });
});
