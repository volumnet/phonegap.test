var counter = 0;

var onSuccess = function(acceleration) {
    $('#inputAccelX').val(Math.round(acceleration.x * 10) / 10);
    $('#inputAccelY').val(Math.round(acceleration.y * 10) / 10);
    $('#inputAccelZ').val(Math.round(acceleration.z * 10) / 10);
    $('#status').text('OK').css(color: 'green');
    $('#counter').text(++counter);
};

var onError = function() {
    $('#status').text('ERROR').css(color: 'red');
};

var accelTest = function() {
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}
setInterval(accelTest, 2000)
