'use strict';

const HashMap = require('../Data-Structures/hashtable/hashtable');
const hashmapA = new HashMap(10);
hashmapA.add('name', 'abd');
hashmapA.add('one', 'thing');
hashmapA.add('test', '99');
const hashmapB = new HashMap(10);
hashmapB.add('name', 'ma');
hashmapB.add('one', 'tt');

const leftJoin = require('../challenges/leftJoin/left-join');

describe('Left Join', () => {
  it('Correct output',()=>{
    let output = leftJoin(hashmapA.storage,hashmapB.storage);
    expect(output).toEqual([
      [ 'test', '99', null ],
      [ 'name', 'abd', 'ma' ],
      [ 'one', 'thing', 'tt' ],
    ]);
  });
});