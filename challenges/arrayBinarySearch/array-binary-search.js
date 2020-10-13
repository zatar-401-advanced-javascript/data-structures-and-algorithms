'use strict';

class Search{
  BinarySearch(arr,val){
    if (Array.isArray(arr) && Number.isInteger(val)){
      let mid = Math.ceil(arr.length/2);
      let min = 0;
      let max = arr.length-1;
    
      while(arr[mid] !== val) {
        mid = Math.ceil((min+max)/2);
        if(arr[mid]<val){
          min = mid+1;
        }else if(arr[mid]>val) {
          max = mid-1;
          if(mid == 1){
            return 0;
          }
        }else if(mid == 1 || mid == arr.length){
          return -1;
        }
      }
      return mid;
    }else{
      console.log('Invalid parameters | function(arr,val) replace arr with array and val with number');
    }
    
  }
}

module.exports = Search;