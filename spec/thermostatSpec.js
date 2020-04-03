'use strict;'

describe ("Thermostat", function() {
  var thermostat;

  beforeEach (function(){
    thermostat = new Thermostat();
  });

  describe ('Functionality', function() {
    
    it('defaults with 20 degrees', function() {
      expect(thermostat.temperature).toEqual(20);
    });

    it('increases the temperature by 1 degree', function() {
      thermostat.up();
      expect(thermostat.temperature).toEqual(21);
    });

    it('decreases the temperature by 1 degree', function() {
      thermostat.down();
      expect(thermostat.temperature).toEqual(19);
    });

    it('allows for the minimum temperature to be 10 degrees', function() {
      for(var i=0; i<11; i++) {
        thermostat.down()
      }
      expect(thermostat.temperature).toEqual(10);
    });

    it ('allows for the maximum temperature to be 32 degrees', function() {
      thermostat.powerSavingMode = false;
      for(var i=0; i<13; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(32);
    });

    it('can reset the temperature back to 20', function() {
      thermostat.reset();
      expect(thermostat.temperature).toEqual(20);
    });
    
  });

  describe ('Switching between power modes', function() {
    
    it('starts with power saving mode on', function() {
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('can switch power mode off', function() {
      thermostat.powerSavingModeOff();
      expect(thermostat.powerSavingMode).toBe(false);
    });

    it('can switch power mode on', function() {
      thermostat.powerSavingModeOff();
      thermostat.powerSavingModeOn();
      expect(thermostat.powerSavingMode).toBe(true);
    });

    it('has a maximum temperature of 25 with power mode on', function() {
      for(var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.temperature).toEqual(25);
    });

  });

  describe ('Usage levels', function() {

    it('shows current energy usage is high above 25', function() {
      thermostat.powerSavingMode = false;
      for(var i = 0; i < 6; i++) {
        thermostat.up()
      }
      expect(thermostat.currentUsage()).toEqual('High Usage');
    });

    it('shows current energy usage is medium between 18 and 25', function() {
      expect(thermostat.currentUsage()).toEqual('Medium Usage');
    });

    it('shows current energy usage is low under 18', function() {
      thermostat.powerSavingMode = true;
      for(var i = 0; i < 3; i++) {
        thermostat.down()
      }
      expect(thermostat.currentUsage()).toEqual('Low Usage');
    });

  });

});