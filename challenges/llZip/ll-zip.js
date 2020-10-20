'use strict';
const LinkedList = require('../../Data-Structures/linkedList/linked-list');




function zipLists(list1, list2) {
  let firstLL = list1.head;
  let secondLL = list2.head;
  
  while(firstLL || secondLL){
    if(secondLL && firstLL){
      list1.insertAfter(firstLL.value,secondLL.value);
      firstLL = firstLL.pointer.pointer;
      secondLL = secondLL.pointer;
    }else if(firstLL){
      firstLL = firstLL.pointer;
    }else if(secondLL){
      list1.append(secondLL.value);
      secondLL = secondLL.pointer;
    }
  }
  return list1;
}

module.exports = zipLists;

// --| Test |--
// const ll1 = new LinkedList();
// const ll2 = new LinkedList();
// ll1.insert(1);
// ll1.append(2);
// ll1.append(3);
// ll1.append(99);
// ll2.insert(4);
// ll2.append(5);
// ll2.append(6);
// console.log(zipLists(ll1,ll2));
// console.log(ll1.toString());
// --| Test |--
