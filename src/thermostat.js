'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MIN_TEMP = 10;
  this.PowerSavingMode = "On";
};
Thermostat.prototype.currentTemp = function() {
  return this.temperature
};

Thermostat.prototype.isMinTemp = function() {
  return this.temperature === this.MIN_TEMP;
};
Thermostat.prototype.increaseTemp = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
  return (this.temperature);
};
Thermostat.prototype.decreaseTemp = function() {
  if (this.isMinTemp()) {
    return;
  }
  this.temperature -= 1;
  return this.temperature
};

Thermostat.prototype.getPowerSavingMode = function () {
  return (this.PowerSavingMode);
};

Thermostat.prototype.offPowerSavingMode = function () {
  this.PowerSavingMode = "Off";
  return (this.PowerSavingMode);
};

Thermostat.prototype.onPowerSavingMode = function () {
  this.PowerSavingMode = "On"
  return (this.PowerSavingMode);
};

Thermostat.prototype.isMaximumTemperature = function() {
  if(this.PowerSavingMode === "On") {
    this.MAXIMUM_TEMPERATURE = 25
  } else {
    this.MAXIMUM_TEMPERATURE = 32
  }
  return this.temperature  === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.reset = function() {
  this.temperature = 20
  return (this.temperature);
};
Thermostat.prototype.getUsage = function() {
  if (this.temperature > 24) {
    return ("high-usage");
  } else if (this.temperature < 18) {
    return ("low-usage");
  } else {
    return ("medium-usage");
  }
};
