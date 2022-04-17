'use strict';



let timeThreshold = 300; // For 0.5 seconds;
let startAlgo = false;
let lastClosedTime,
	continuous = false;
let body = document.querySelector('body');
let message;
let san=0;
//entry point :
function main() {
	JEEFACETRANSFERAPI.init({
		canvasId: 'canvas',
		NNCpath: 'assets/model/',
		callbackReady: function(errCode) {
			if (errCode) {
				console.log('ERROR - cannot init JEEFACETRANSFERAPI. errCode =', errCode);
				errorCallback(errCode);
				return;
			}
			console.log('INFO : JEEFACETRANSFERAPI is ready !!!');
			successCallback();
		} //end callbackReady()
	});
} //end main()

function successCallback() {
	// Call next frame
	nextFrame();
	document.getElementById('full-page-loader').style.display = 'none';
	body = document.querySelector('body');
	message = document.querySelector('#message');
	// Add code after API is ready.
}

function errorCallback(errorCode) {
	// Add code to handle the error
}

function nextFrame() {
	if (!startAlgo) {
		return;
	}
	let deltaTime = Date.now() - lastClosedTime;
	if (deltaTime > timeThreshold && continuous) {
		start_alarm();
		// console.log("Alarm Called");
		body.style.background = '#f00';
		
	} else {
		stop_alarm();
		body.style.background = '#fff';
	}

	if (JEEFACETRANSFERAPI.is_detected()) {
		// Do something awesome with rotation values
		let rotation = JEEFACETRANSFERAPI.get_rotationStabilized();
		let isHeadPostureOk = isHeadPostureOK(rotation);
		let positionScaleZ = JEEFACETRANSFERAPI.get_positionScale()[2];
		let screenDistanceOK = isScreenDistanceOK(positionScaleZ);

		if (!isHeadPostureOk[0] || !isHeadPostureOk[1] || !isHeadPostureOk[2] || !screenDistanceOK) {
			if (lastClosedTime === undefined || !continuous) lastClosedTime = Date.now(); // Now is the new time
			continuous = true;
			if (message) {
				let messageContent = '';
				if (!screenDistanceOK) {
					messageContent += '<p>Too close to the screen.</p>';
				}
				if (!isHeadPostureOk[0]) {
					messageContent += '<p>Head is either too up or too down.</p>';
				}
				if (!isHeadPostureOk[1]) {
					messageContent += '<p>Head is turned too much.</p>';
				}
				if (!isHeadPostureOk[2]) {
					messageContent += '<p>Head is bend towards sholders.</p>';
				}
				message.innerHTML = messageContent;
			}
		} else {
			if (message) {
				message.innerHTML = '';
			}
			continuous = false;
		}

		//**************************************************************************** */

		// The API is detected
		//console.log('Detected');
		san++;
	} else {
		// Tell the user that detection is off.
		//console.log('Not Detected');
	}
	// Replay frame
	//console.log(san)
	requestAnimationFrame(nextFrame);
}

function start() {
	init_sound();
	startAlgo = true;
	nextFrame();
	document.getElementById('warnings').style.display = 'none';
}
function stops(){
	var firebaseConfig = {
		apiKey: "AIzaSyDstn0y3uLlMCXC2ITsWBbblT3JIuAih80",
		authDomain: "nallaerupom-96758.firebaseapp.com",
		databaseURL: "https://nallaerupom-96758.firebaseio.com",
		projectId: "nallaerupom-96758",
		storageBucket: "nallaerupom-96758.appspot.com",
		messagingSenderId: "456782876188",
		appId: "1:456782876188:web:347f8ea0aa408324b199d9",
		measurementId: "G-2LV5JX102J"
	  };
	  // Initialize Firebase
	  firebase.initializeApp(firebaseConfig);

	firebase.auth().onAuthStateChanged((user) => {
		san=san/10;
        if (user) {
            var uid = user.uid;
          var rootRef =firebase.database().ref().child(uid);
          var usersRef= rootRef.child("Dyspraxia/21");
        usersRef.set({
               "1": san,
             });
        } 
      });
	console.log(san);
    setTimeout(function(){
        location.href="/sit-str..html";
    },5000);
}
