'use strict';

function Animal(name, type) {
  this.name = name;
  this.type = type;
}

class AnimalShelter {
  constructor() {
    this.shelter = [];
  }

  enqueue(animal) {
    if (animal.type == 'cat' || animal.type == 'dog') {
      this.shelter.push(animal);
      return this;
    } else {
      return 'Not cat or dog';
    }
  }

  dequeue(pref) {
    if ((pref != 'cat') && (pref != 'dog')) {
      return null;
    }

    let dequeuedAnimal;

    if ((pref == 'cat') || (pref == 'dog')) {
      for (let index = 0; index < this.shelter.length; index++) {
        if (this.shelter[index].type == pref) {
          dequeuedAnimal = this.shelter[index];
          this.shelter[index] = 'removed';
          index += this.shelter.length;
        }
      }
    }
    const newArr = [];
    this.shelter.forEach((element)=>{
      if(element != 'removed'){
        newArr.push(element);
      }
    });
    this.shelter = newArr;
    return dequeuedAnimal;
  }
}

module.exports = {Animal,AnimalShelter};

// const a1 = new Animal('test', 'cat');
// const a11 = new Animal('test', 'cat');
// const a2 = new Animal('test', 'dog');
// const a22 = new Animal('test', 'dog');
// const a3 = new Animal('test', 'test');

// const shelter = new AnimalShelter();

// shelter.enqueue(a1);
// shelter.enqueue(a2);
// shelter.enqueue(a11);
// shelter.enqueue(a22);
// shelter.enqueue(a3);
// console.log(shelter);
// shelter.dequeue('dog');
// console.log(shelter.dequeue('dog'));
// console.log(shelter);
