/*
		Javascript file that creates a google maps instance
		as well as any trail instances
*/

function load() {

	//Creates a google hybrid map instance
	var map = new google.maps.Map(document.getElementById("map"), {
		center: new google.maps.LatLng(40.875758, -124.078604),
		zoom: 15,
		minZoom: 10,
		scrollwheel: true,
		navigationControl: false,
		mapTypeControl: false,
		scaleControl: false,
		mapTypeId: 'hybrid'
	});


	//Creates polylines of each trail
	var kloppLine = new google.maps.Polyline({
		path: klopp,
		geodesic: true,
		strokeColor: 'red',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var lostManLine = new google.maps.Polyline({
		path: lostMan,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var hikshariLine = new google.maps.Polyline({
		path: hikshari,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var redwoodParkLine = new google.maps.Polyline({
		path: redwoodPark,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});
	var brackishPondLine = new google.maps.Polyline({
		path: brackishPond,
		geodesic: true,
		strokeColor: '#FF0000',
		strokeOpacity: 1.0,
		strokeWeight: 2
	});


	//sets polyline on map and calculates distance
	kloppLine.setMap(map);
	var kloppDistance = kloppLine.getPath();
	kloppDistance = google.maps.geometry.spherical.computeLength(kloppDistance);
	kloppDistance = kloppDistance * 0.000621371;

	lostManLine.setMap(map);
	var lostManDistance = lostManLine.getPath();
	lostManDistance = google.maps.geometry.spherical.computeLength(lostManDistance);
	lostManDistance = lostManDistance * 0.000621371;

	hikshariLine.setMap(map);
	var hikshariDistance = hikshariLine.getPath();
	hikshariDistance = google.maps.geometry.spherical.computeLength(hikshariDistance);
	hikshariDistance = hikshariDistance * 0.000621371;

	redwoodParkLine.setMap(map);
	var redwoodParkDistance = redwoodParkLine.getPath();
	redwoodParkDistance = google.maps.geometry.spherical.computeLength(redwoodParkDistance);
	redwoodParkDistance = redwoodParkDistance * 0.000621371;

	brackishPondLine.setMap(map);
	var brackishPondDistance = brackishPondLine.getPath();
	brackishPondDistance = google.maps.geometry.spherical.computeLength(brackishPondDistance);
	brackishPondDistance = brackishPondDistance * 0.000621371;


	//creates marker on map for each trail
	var kloppMarker = new google.maps.Marker({
		position: kloppStart,
		map: map,
		title: 'Klopp Lake'
	});
	var lostManMarker = new google.maps.Marker({
		position: lostManStart,
		map: map,
		title: 'Lost Man Trail'
	});
		var hikshariMarker = new google.maps.Marker({
		position: hikshariStart,
		map: map,
		title: 'Hikshari Trail'
	});
		var redwoodParkMarker = new google.maps.Marker({
		position: redwoodParkStart,
		map: map,
		title: 'Redwood Park'
	});
	var brackishPondMarker = new google.maps.Marker({
		position: brackishPondStart,
		map: map,
		title: 'Brackish Pond'
});


	//Find the sunrise/sunset based on lat/long of trail start
	var lmc_ar = sunrise_set(lostManStart.lat,lostManStart.lng);
	var kl_ar = sunrise_set(kloppStart.lat,kloppStart.lng);
	var ht_ar = sunrise_set(hikshariStart.lat,hikshariStart.lng);
	var rp_ar = sunrise_set(redwoodParkStart.lat,redwoodParkStart.lng);
	var bp_ar = sunrise_set(brackishPondStart.lat,brackishPondStart.lng);


	// Creates variables for weather conditions and is currently pulling from only the Arcata API on wunderground.com
	// Will need to create different variables for areas other than arcata and pull the .json file from wunderground.com for each area... couldn't do it based on geolocation
	// If someoen can figure out how to do it via geolocation that would be awesome
	var weather = new XMLHttpRequest();
	weather.open("GET", "http://api.wunderground.com/api/e2d25049016cd0f7/conditions/q/CA/Arcata.json", false);
	weather.send(null);
	var r = JSON.parse(weather.response);
	var weather = r.current_observation.display_location.full;
	var temp = r.current_observation.temperature_string;
	var wind = r.current_observation.wind_string;    

	
	//String information for trail infowindow
	var kloppContString = 	'<h2>Klopp Lake</h2>'+ '<p>Trail length: ' + kloppDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + kl_ar[0] + '</p>' + '<p>Sunset: ' + kl_ar[1] + '</p>'
	                                        + '<p>Temperature: ' + temp + '</p>' + '<p>Wind Speed: ' + wind + '</p>';
	var lostManContString =  '<h2>Lost Man Trail</h2>'+ '<p>Trail length: ' + lostManDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + lmc_ar[0] + '</p>' + '<p>Sunset: ' + lmc_ar[1] + '</p>'
	                                        + '<p>Temperature: ' + temp + '</p>' + '<p>Wind Speed: ' + wind + '</p>';
	var hikshariContString = '<h2>Hikshari Trail</h2>'+ '<p>Trail length: ' + hikshariDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + ht_ar[0] + '</p>' + '<p>Sunset: ' + ht_ar[1] + '</p>'
	                                        + '<p>Temperature: ' + temp + '</p>' + '<p>Wind Speed: ' + wind + '</p>';
	var redwoodParkContString = '<h2>Redwood Park</h2>' + '<p>Trail length: ' + redwoodParkDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + rp_ar[0] + '</p>' + '<p>Sunset: ' + rp_ar[1] + '</p>'
	                                        + '<p>Temperature: ' + temp + '</p>' + '<p>Wind Speed: ' + wind + '</p>';
	var brackishPondContString = '<h2>Brackish Pond</h2>' + '<p>Trail length: ' + brackishPondDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + bp_ar[0] + '</p>' + '<p>Sunset: ' + bp_ar[1] + '</p>' 
	                                        + '<p>Temperature: ' + temp + '</p>' + '<p>Wind Speed: ' + wind + '</p>';

	//creates infowindow when marker is clicked for each trail
	var kloppInfo = new google.maps.InfoWindow({
		content: kloppContString
	});
		var lostManInfo = new google.maps.InfoWindow({
		content: lostManContString
	});
		var hikshariInfo = new google.maps.InfoWindow({
		content: hikshariContString
	});
		var redwoodParkInfo = new google.maps.InfoWindow({
		content: redwoodParkContString
	});
		var brackishPondInfo = new google.maps.InfoWindow({
		content: brackishPondContString
	});


	//creates on click listener for the infowindow for each trail marker
	kloppMarker.addListener('click', function(){
		kloppInfo.open(map, kloppMarker);
	});
	lostManMarker.addListener('click', function(){
		lostManInfo.open(map, lostManMarker);
	});

	hikshariMarker.addListener('click', function(){
		hikshariInfo.open(map, hikshariMarker);
	});
	redwoodParkMarker.addListener('click', function(){
		redwoodParkInfo.open(map, redwoodParkMarker);
	});
	brackishPondMarker.addListener('click', function(){
		brackishPondInfo.open(map, brackishPondMarker);
	});


	//On click listeners for buttons in the bootstrap menu
	var tester = document.getElementById("lostman");
	tester.addEventListener('click',function(){
		map.setCenter(lostManStart);});

	var tester = document.getElementById("klopp");
	tester.addEventListener('click',function(){
		map.setCenter(kloppStart);});

	var tester = document.getElementById("hikshari");
	tester.addEventListener('click',function(){
		map.setCenter(hikshariStart);});

	var tester = document.getElementById("redwoodPark");
	tester.addEventListener('click',function(){
		map.setCenter(redwoodParkStart);});

	var tester = document.getElementById("brackishPond");
	tester.addEventListener('click',function(){
		map.setCenter(brackishPondStart);});

	var infoWindow = new google.maps.InfoWindow;


};
