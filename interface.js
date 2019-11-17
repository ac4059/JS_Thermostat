$(document).ready(function(){
  var thermostat = new Thermostat();
  function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.getUsage());
  }
    updateTemperature()

    $('#temperature-up').on('click', function () {
      thermostat.increaseTemp();
    updateTemperature()                       ;})
    $('#temperature-down').on('click', function() {
      thermostat.decreaseTemp();
    updateTemperature()
    })
    $('#temperature-reset').on('click', function () {
      thermostat.reset();
    updateTemperature()
})
    $('#powersaving-on').click(function() {
      thermostat.onPowerSavingMode();
    $('#power-saving-status').text('on')
    updateTemperature();
  })
    $('#powersaving-off').click(function() {
    thermostat.offPowerSavingMode();
    $('#power-saving-status').text('off')
    updateTemperature();
})
})
