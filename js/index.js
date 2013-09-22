var onSuccess = function(acceleration) {
    document.getElementById('inputAccelX').value = Math.round(acceleration.x * 1000) / 1000;
    document.getElementById('inputAccelY').value = Math.round(acceleration.y * 1000) / 1000;
    document.getElementById('inputAccelZ').value = Math.round(acceleration.z * 1000) / 1000;
};

var onError = function() {
    alert('onError!');
};

var accelTest = function() {
    navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
}
setInterval(accelTest, 1000)