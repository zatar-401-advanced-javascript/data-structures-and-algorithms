'use strict';
const MergeSort = require('../challenges/merge-sort/merge-sort');

describe('Insertion Sort',()=>{
  it('Sort reverse-sorted ', () => {
    const result = MergeSort([20,18,12,8,5,-2]);
    expect(result).toEqual( [ -2, 5, 8, 12, 18, 20 ]);
  });
  it('Sort few uniques ', () => {
    const result = MergeSort([5,12,7,5,5,7]);
    expect(result).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('Sort nearly-sorted ', () => {
    const result = MergeSort([2,3,5,7,13,11]);
    expect(result).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});