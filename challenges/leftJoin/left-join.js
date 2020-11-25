'use strict';


function leftJoin(leftHash, rightHash) {
  let output = [];
  
  for (let key in leftHash) {
    let keyName = Object.keys(leftHash[key].head.value);
    let leftValue = Object.values(leftHash[key].head.value);
    let rightValue = (key in rightHash ? Object.values(rightHash[key].head.value) : null);

    output.push([keyName[0], leftValue[0], rightValue?rightValue[0]:null]);
  }
  return output;
}

module.exports = leftJoin;
// tests
// const HashMap = require('../../Data-Structures/hashtable/hashtable');

// const hashmapA = new HashMap(10);
// hashmapA.add('name', 'abd');
// hashmapA.add('one', 'thing');
// hashmapA.add('test', '99');

// const hashmapB = new HashMap(10);
// hashmapB.add('name', 'ma');
// hashmapB.add('one', 'tt');

// console.log(leftJoin(hashmapA.storage,hashmapB.storage));