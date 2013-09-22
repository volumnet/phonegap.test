var onSuccess = function(acceleration) {
    document.getElementById('inputAccel').value = acceleration.x + ' x ' + acceleration.y + ' x ' + acceleration.z + ' x '      + acceleration.timestamp;
};

var onError = function() {
    alert('onError!');
};

var accelTest = function() {
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}
document.getElementById('aAccel').onclick = accelTest;