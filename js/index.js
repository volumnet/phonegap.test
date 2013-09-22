var counter = 0;

var onSuccess = function(acceleration) {
    $('#inputAccelX').val(Math.round(acceleration.x * 1000));
    $('#inputAccelY').val(Math.round(acceleration.y * 1000));
    $('#inputAccelZ').val(Math.round(acceleration.z * 1000));
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
