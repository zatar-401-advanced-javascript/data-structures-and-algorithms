'use strict';
const QuckSort = require('../challenges/quick-sort/quick-sort');

describe('Quick Sort',()=>{
  it('Sort reverse-sorted ', () => {
    const result = QuckSort([20,18,12,8,5,-2],0,5);
    expect(result).toEqual( [ -2, 5, 8, 12, 18, 20 ]);
  });
  it('Sort few uniques ', () => {
    const result = QuckSort([5,12,7,5,5,7],0,5);
    expect(result).toEqual([ 5, 5, 5, 7, 7, 12 ]);
  });
  it('Sort nearly-sorted ', () => {
    const result = QuckSort([2,3,5,7,13,11],0,5);
    expect(result).toEqual([ 2, 3, 5, 7, 11, 13 ]);
  });
});