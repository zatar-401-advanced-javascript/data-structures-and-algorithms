'use strict';

function quickSort(arr,left,right){
  if(left<right){
    const position = partition(arr,left,right);
    quickSort(arr,left,position-1);
    quickSort(arr,position+1,right);
  }
  return arr;
}

function partition(arr,left,right){
  const pivot = arr[right];
  let low = left-1;

  for(let i =left;i<right;i++){
    if(arr[i]<=pivot){
      low++;
      swap(arr,i,low);
    }
  }
  swap(arr,right,low+1);
  return low+1;
}

function swap(arr,i,low){
  let temp = arr[i];
  arr[i]=arr[low];
  arr[low]=temp;
}

let arr = [20,18,12,8,5,-2];
console.log(quickSort(arr,0,arr.length-1));

module.exports = quickSort;