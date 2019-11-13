// 'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
};
Thermostat.prototype.currentTemp = function() {
  return this.temperature
};
Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MIN_TEMP;
};
Thermostat.prototype.increaseTemp = function() {
  this.temperature += 1;
  return this.temperature
};
Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
  return this.temperature
};
