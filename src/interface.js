$( document ).ready(function() {
  var thermostat = new Thermostat();

  updateTemperature();

  $( "#increase" ).on('click', function() {
    thermostat.up();
    updateTemperature();
  });

  $( "#decrease" ).on('click', function(){
    thermostat.down();
    updateTemperature();
  });

  $( "#psm_on").on('click', function() {
    thermostat.powerSavingModeOn();
    $('#Power-Saving-Mode').text('on');
    updateTemperature();
  });

  $( "#psm_off").on('click', function() {
    thermostat.powerSavingModeOff();
    $('#Power-Saving-Mode').text('off');
    updateTemperature();
  });

  $( "#reset").on('click', function() {
    thermostat.reset();
    $('#Power-Saving-Mode').text('');
    updateTemperature();
  });

  function updateTemperature() {
    $("#showTemperature").text(thermostat.showTemperature() + '°C');
    if(thermostat.currentUsage() === 'Low Usage') {
    $('#showTemperature').css('color', 'blue')
  } else if(thermostat.currentUsage() === 'Medium Usage') {
    $('#showTemperature').css('color', 'orange')
  } else {
    $('#showTemperature').css('color', 'red')
  }
  };


}); 
