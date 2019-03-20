'use strict';

function CarFactory(name) {
  let car = Object.assign(
    {},
    {name},
    {drive},
    {stop},
    {wheels:4}
  );

  function drive() {
    return 'Moving Forward';
  }
  function stop() {
    return 'Stopping';
  }

  return Object.freeze(car);
}

function MotorcycleFactory(name) {
  let motorcycle = Object.assign(
    {},
    {name},
    {wheels:2},
    {drive},
    {stop},
    {wheelie}
  );

  function drive() {
    return 'Moving Forward';
  }
  function stop() {
    return 'Stopping';
  }
  function wheelie(){return 'Wheee!';}

  return Object.freeze(motorcycle);
}

module.exports = {Car:CarFactory, Motorcycle:MotorcycleFactory};
