// 'use strict';

describe('Thermostat', function() {

  // var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  it('starts with a default of 20 degrees', function(){
    expect(thermostat.currentTemp()).toEqual(20);
  });

  it('increases tempature when called', function() {
    thermostat.increaseTemp()
    expect(thermostat.currentTemp()).toEqual(21);
  });

  it('decreases temperature when called', function() {
    thermostat.decreaseTemp()
    expect(thermostat.currentTemp()).toEqual(19);
  });

  it('temperature cannot drop below 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermostat.decreaseTemp()
    }
    expect(thermostat.currentTemp()).toEqual(10);
  });
});
