'use strict';

const importArrayShift = require('../challenges/arrayShift/array-shift.js');
const arrayShift = new importArrayShift();
jest.spyOn(global.console,'log');

describe('Array Shift',() =>{
  it('First test output is correct',() =>{
    let obj = {arr:[2,4,6,8], val: 5};

    expect(arrayShift.insertShiftArray(obj.arr,obj.val)).toEqual([2,4,5,6,8]);
  });
  it('Second test output is correct',() =>{
    let obj = {arr:[4,8,15,23,42], val: 16};

    expect(arrayShift.insertShiftArray(obj.arr,obj.val)).toEqual([4,8,15,16,23,42]);
  });
  it('Invalid parameters',() =>{
    arrayShift.insertShiftArray('aaa','e');
    expect(console.log).toHaveBeenCalled();
  });
});