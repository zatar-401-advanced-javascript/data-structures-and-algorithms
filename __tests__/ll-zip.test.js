'use strict';
const llZip = require('../challenges/llZip/ll-zip');
const LinkedList = require('../Data-Structures/linkedList/linked-list');




describe('ll-Zip', () => {
  it('Can zip the two linked lists together into one', () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.insert(1);
    ll1.append(2);
    ll2.insert(4);
    ll2.append(5);
    const zip = llZip(ll1, ll2);
    expect(zip).toBeDefined();
  });
  it(`Can't zip the two linked lists together if both empty`, () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    const zip = llZip(ll1, ll2);
    expect(zip.head).toBeNull();
  });
  it(`Can zip the two linked lists together if first one bigger`, () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.insert(1);
    ll1.append(2);
    ll1.append(3);
    ll1.append(99);
    ll2.insert(4);
    ll2.append(5);
    const zip = llZip(ll1, ll2);
    expect(zip).toBeDefined();
  });
  it(`Can zip the two linked lists together if second one bigger`, () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    ll1.insert(1);
    ll1.append(2);
    ll2.insert(4);
    ll2.append(5);
    ll2.append(6);
    ll2.append(99);
    const zip = llZip(ll1, ll2);
    expect(zip).toBeDefined();
  });
});