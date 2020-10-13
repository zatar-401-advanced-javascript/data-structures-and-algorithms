'use strict';

class ArrayShift {
  insertShiftArray(arr, val) {
    if (Array.isArray(arr) && Number.isInteger(val)) {
      const mid = Math.ceil(arr.length / 2);
      const newArr = arr.slice();

      newArr[mid] = val;
      let x = mid;
      for (let i = mid + 1; i <= arr.length; i++) {
        newArr[i] = arr[x];
        x++;
      }
      return newArr;
    }else{
      console.log('Invalid parameters | function(arr,val) replace arr with array and val with number');
    }
  }
}

module.exports = ArrayShift;