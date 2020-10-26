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
    if(pref == 'cat'){
      for (let index = 0; index < this.shelter.length; index++) {
        if(this.shelter[index].type == cat){
          
          return this.shelter[index]
        }
      }
    }
    if(pref == 'dog'){
      while(this.shelter)
    }
  }
}

const a1 = new Animal('test', 'cat');
const a2 = new Animal('test', 'dog');
const a3 = new Animal('test', 'test');

const shelter = new AnimalShelter();

shelter.enqueue(a1);
shelter.enqueue(a2);
shelter.enqueue(a3);
shelter.dequeue('dog');

console.log(shelter);