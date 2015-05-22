/**
 * Function that creates a BeaconRegion data transfer object.
 *
 * @throws Error if the BeaconRegion parameters are not valid.
 */
function createBeacon() {

var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D'; // mandatory
    var identifier = 'cocktailOrMarshmallow'; // mandatory
    var minor = 33613; // optional, defaults to wildcard if left empty
    var major = 1285; // optional, defaults to wildcard if left empty

    // throws an error if the parameters are not valid
    var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);
    alert("create beacon called")
    return beaconRegion;
}

// Start monitoring a single iBeacon

var logToDom = function (message) {
    alert("log to DOM called")
    var e = document.createElement('label');
    e.innerText = message;

    var br = document.createElement('br');
    var br2 = document.createElement('br');
    document.body.appendChild(e);
    document.body.appendChild(br);
    document.body.appendChild(br2);

    window.scrollTo(0, window.document.height);
};

var delegate = new cordova.plugins.locationManager.Delegate();

delegate.didDetermineStateForRegion = function (pluginResult) {
    alert("did determine state for Region")

    logToDom('[DOM] didDetermineStateForRegion: ' + JSON.stringify(pluginResult));

    cordova.plugins.locationManager.appendToDeviceLog('[DOM] didDetermineStateForRegion: '
        + JSON.stringify(pluginResult));
};

delegate.didStartMonitoringForRegion = function (pluginResult) {
    alert("did start monitoring for region")
    console.log('didStartMonitoringForRegion:', pluginResult);

    logToDom('didStartMonitoringForRegion:' + JSON.stringify(pluginResult));
};

delegate.didRangeBeaconsInRegion = function (pluginResult) {
    alert("did range beacons in regions")
    logToDom('[DOM] didRangeBeaconsInRegion: ' + JSON.stringify(pluginResult));
};

// var uuid = 'B9407F30-F5F8-466E-AFF9-25556B57FE6D';
// var identifier = 'cocktailOrMarshmallow';
// var minor = 33613;
// var major = 1285;
// var beaconRegion = new cordova.plugins.locationManager.BeaconRegion(identifier, uuid, major, minor);

// cordova.plugins.locationManager.setDelegate(delegate);

// required in iOS 8+
// cordova.plugins.locationManager.requestWhenInUseAuthorization();
// // or cordova.plugins.locationManager.requestAlwaysAuthorization()

// cordova.plugins.locationManager.startMonitoringForRegion(beaconRegion)
//     .fail(console.error)
//     .done();

// enable bluetooth service

cordova.plugins.locationManager.isBluetoothEnabled()
    .then(function(isEnabled){
        console.log("isEnabled: " + isEnabled);
        if (isEnabled) {
            cordova.plugins.locationManager.disableBluetooth();
        } else {
            cordova.plugins.locationManager.enableBluetooth();
        }
    })
    .fail(console.error)
    .done();
