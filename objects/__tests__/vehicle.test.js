'use strict';

const Vehicle = require('../vehicle-class.js');
const FactoryMade = require('../vehicle-factory.js');

describe('Vehicles', () => {

  describe('Car', () => {

    let car = new Vehicle.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle', () => {

    let motorcycle = new Vehicle.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});


describe('Vehicles Factory made', () => {

  describe('Car', () => {

    let car = new FactoryMade.Car('foo');

    it('has 4 wheels', () => {
      expect(car.wheels).toEqual(4);
    });

    it('can drive', () => {
      expect(car.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(car.stop()).toBeTruthy();
    });

    it('cannot do a wheelie', () => {
      expect(car.wheelie).toBeUndefined();
    });

  });

  describe('Motorcycle Factory made', () => {

    let motorcycle = new FactoryMade.Motorcycle('foo');

    it('has 2 wheels', () => {
      expect(motorcycle.wheels).toEqual(2);
    });

    it('can drive', () => {
      expect(motorcycle.drive()).toBeTruthy();
    });

    it('can stop', () => {
      expect(motorcycle.stop()).toBeTruthy();
    });

    it('can do a wheelie', () => {
      expect(motorcycle.wheelie()).toBeTruthy();
    });

  });

});
