var app = function() {
    var onSuccess = function(acceleration) {
        alert('Acceleration X: ' + acceleration.x + '\n' +
              'Acceleration Y: ' + acceleration.y + '\n' +
              'Acceleration Z: ' + acceleration.z + '\n' +
              'Timestamp: '      + acceleration.timestamp + '\n');
    };

    var onError = function() {
        alert('onError!');
    };

    var accelTest = function() {
        navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
    }

};
