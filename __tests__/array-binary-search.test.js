'use strict';

const importArraySearch = require('../challenges/arrayBinarySearch/array-binary-search.js');
const ArraySearch = new importArraySearch();

jest.spyOn(global.console,'log');

describe('Array Binary Search',() =>{
  it('First test output is correct',() =>{
    let obj = {arr:[4,8,15,16,23,42], val: 15};
    expect(ArraySearch.BinarySearch(obj.arr,obj.val)).toEqual(2);
  });
  it('Second test output is correct',() =>{
    let obj = {arr:[11,22,33,44,55,66,77], val: 90};
    expect(ArraySearch.BinarySearch(obj.arr,obj.val)).toEqual(-1);
  });
  it('Invalid parameters',() =>{
    ArraySearch.BinarySearch('aaa','e');
    expect(console.log).toHaveBeenCalled();
  });
});