/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        
        
       console.log('[2]');

    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
       console.log('[1]');
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
		app.receivedEvent('deviceready');
		console.log('[4]');
		var data = new Date();
		window.document.getElementById('div_teste_gps').innerHTML = data.getHours() + ':' + data.getMinutes() + ':' + data.getSeconds();
		console.log('[4.1]');
		
		navigator.vibrate(3000);

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
//        var parentElement = document.getElementById(id);
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');

//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
       console.log('[3] ');
    }
};


function teste_gps() {

//window.document.getElementById('div_teste_gps').innerHTML = 'Ok!';


// onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        window.document.getElementById('div_teste_gps').innerHTML = 
        		'Latitude: '          + position.coords.latitude          + '\n<br>' +
              'Longitude: '         + position.coords.longitude         + '\n<br>' +
              'Altitude: '          + position.coords.altitude          + '\n<br>' +
              'Accuracy: '          + position.coords.accuracy          + '\n<br>' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n<br>' +
              'Heading: '           + position.coords.heading           + '\n<br>' +
              'Speed: '             + position.coords.speed             + '\n<br>' +
              'Timestamp: '         + position.timestamp                + '\n<br>';

		var url = "https://maps.google.com/?q=@"+position.coords.latitude+","+position.coords.longitude+"&zoom=15";
		var ref = cordova.InAppBrowser.open(url, '_blank', 'location=no, footercolor=#ffffff');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);	
	
}