'use strict';

describe('Thermostat', function() {

  var thermostat;

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

  it('has a power saving mode which defaults to On when spawned', function() {
    expect(thermostat.getPowerSavingMode()).toEqual("On");
  })

  it('can turn power saving mode off.', function () {
    expect(thermostat.offPowerSavingMode()).toEqual("Off");
  })
  it('can turn power saving mode on.', function () {
    thermostat.offPowerSavingMode();
    expect(thermostat.onPowerSavingMode()).toEqual("On");
  })
  it('has a maximum temperature of 25 degrees with powersaving on', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(25);
});
  it('has a maximum temperature of 32 degrees with powersaving off', function() {
    thermostat.offPowerSavingMode();
    for (var i = 0; i < 13; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.currentTemp()).toEqual(32);
});
  it('as a reset function which sets the temperature back to 20 degrees', function () {
    thermostat.increaseTemp();
    expect(thermostat.reset()).toEqual(20);
});
  it('has a usage function which reports temps of 18-24 degrees as medium-usage', function() {
  expect(thermostat.getUsage()).toEqual('medium-usage');
});
  it('has a usage function which reports temps of 25+ degrees as high-usage', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.increaseTemp();
    }
    expect(thermostat.getUsage()).toEqual('high-usage');
  });
  it('has a usage function which reports temps of 17 degrees and below as low-usage', function() {
    for (var i = 0; i < 6; i++) {
      thermostat.decreaseTemp();
    }
    expect(thermostat.getUsage()).toEqual('low-usage');
  });
});
