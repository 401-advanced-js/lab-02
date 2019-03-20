'use strict';

const Vehicle = require('./vehicle-constructor');

class Car extends Vehicle{
  constructor(name){
    super(name, 4);
  }
}

class Motorcycle extends Vehicle{
  constructor(name){
    super(name, 2);
  }
  wheelie() {
    return 'Wheee!';
  }
}

module.exports = {Car,Motorcycle};
