'use strict';

console.log(MergeSort([8,4,23,30]));

function MergeSort(arr) {

  let n = arr.length;
  let mid,left,right;

  if (n < 2) {
    return arr;
  }

  mid = Math.floor(n / 2);

  left = arr.slice(0, mid);
  right = arr.slice(mid);

  return merge(MergeSort(left), MergeSort(right));
}


function merge(left, right) {
  let result = [],
    i = 0,
    j = 0;

  while (i < left.length && j < right.length) {

    if (left[i] < right[j]) {
      result.push(left[i++]);
    } else {
      result.push(right[j++]);
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = MergeSort;

// Didn't work on all cases :(

// function mergeSort(arr) {
//   const n = arr.length;
  
//   if (n > 1) {
//     const mid = Math.floor(n / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
//     // console.log(left,right,mid);
//     mergeSort(left);
//     mergeSort(right);
//     merge(left, right, arr);
//   }
//   return arr;
// }

// function merge(left, right, arr) {
//   let i = 0;
//   let j = 0;
//   let k = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] <= right[j]) {
//       arr[k] = left[i];
//       i++;
//     } else {
//       arr[k] = right[j];
//       j++;
//     }
//     k++;
//   }
//   if (i === left.length) {
//     arr[k] = right[j];
//     j++;
//     k++;
//   } else {
//     arr[k] = left[i];
//     i++;
//     k++;
//   }
// }


