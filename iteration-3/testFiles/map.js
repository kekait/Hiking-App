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
	var strawberryRockLine = new google.maps.Polyline({
		path: strawberryRock,
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

	strawberryRockLine.setMap(map);
	var strawberryRockDistance = strawberryRockLine.getPath();
	strawberryRockDistance = google.maps.geometry.spherical.computeLength(strawberryRockDistance);
	strawberryRockDistance = strawberryRockDistance * 0.000621371;


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
	var strawberryRockMarker = new google.maps.Marker({
		position: strawberryRockStart,
		map: map,
		title: 'Strawberry Rock'
	});


	//Find the sunrise/sunset based on lat/long of trail start
	var lmc_ar = sunrise_set(lostManStart.lat,lostManStart.lng);
	var kl_ar = sunrise_set(kloppStart.lat,kloppStart.lng);
	var ht_ar = sunrise_set(hikshariStart.lat,hikshariStart.lng);
	var rp_ar = sunrise_set(redwoodParkStart.lat,redwoodParkStart.lng);
	var bp_ar = sunrise_set(brackishPondStart.lat,brackishPondStart.lng);
	var sr_ar = sunrise_set(strawberryRockStart.lat,strawberryRockStart.lng);


	//String information for trail infowindow
	var kloppContString = 	'<h2>Klopp Lake</h2>'+ '<div id="weather"></div>'+'<p>Trail length: ' + kloppDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + kl_ar[0] + '</p>' + '<p>Sunset: ' + kl_ar[1] + '</p>';
	var lostManContString =  '<h2>Lost Man Trail</h2>'+ '<div id="weather"></div>'+'<p>Trail length: ' + lostManDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + lmc_ar[0] + '</p>' + '<p>Sunset: ' + lmc_ar[1] + '</p>';
	var hikshariContString = '<h2>Hikshari Trail</h2>'+ '<div id="weather"></div>'+'<p>Trail length: ' + hikshariDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + ht_ar[0] + '</p>' + '<p>Sunset: ' + ht_ar[1] + '</p>';
	var redwoodParkContString = '<h2>Redwood Park</h2>' + '<div id="weather"></div>'+'<p>Trail length: ' + redwoodParkDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + rp_ar[0] + '</p>' + '<p>Sunset: ' + rp_ar[1] + '</p>';
	var brackishPondContString = '<h2>Brackish Pond</h2>' + '<div id="weather"></div>'+'<p>Trail length: ' + brackishPondDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + bp_ar[0] + '</p>' + '<p>Sunset: ' + bp_ar[1] + '</p>';
	var strawberryRockString = '<h2>Strawberry Rock</h2>' + '<div id="weather"></div>'+'<p>Trail length: ' + strawberryRockDistance.toFixed(2) + 'mi</p>'
						+ '<p>Sunrise: ' + sr_ar[0] + '</p>' + '<p>Sunset: ' + sr_ar[1] + '</p>';

						
	//DummyWindow so only one infowindow will be open at any time
	var lastWindow = new google.maps.InfoWindow({
	});					
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
	var strawberryRockInfo = new google.maps.InfoWindow({
		content: strawberryRockString
	});


	//creates on click listener for the infowindow for each trail marker
	kloppMarker.addListener('click', function(){
		lastWindow.close();
		kloppInfo.open(map, kloppMarker);
		lastWindow = kloppInfo;

	});
	lostManMarker.addListener('click', function(){
		lastWindow.close();
		lostManInfo.open(map, lostManMarker);
		lastWindow = lostManInfo;
	});

	hikshariMarker.addListener('click', function(){
		lastWindow.close();
		hikshariInfo.open(map, hikshariMarker);
		lastWindow = hikshariInfo;
	});
	redwoodParkMarker.addListener('click', function(){
		lastWindow.close();
		redwoodParkInfo.open(map, redwoodParkMarker);
		lastWindow = redwoodParkInfo;
	});
	brackishPondMarker.addListener('click', function(){
		lastWindow.close();
		brackishPondInfo.open(map, brackishPondMarker);
		lastWindow = brackishPondInfo;
	});
	strawberryRockMarker.addListener('click', function(){
		lastWindow.close();
		strawberryRockInfo.open(map, strawberryRockMarker);
		lastWindow = strawberryRockInfo;
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

	var tester = document.getElementById("strawberryRock");
	tester.addEventListener('click',function(){
		map.setCenter(strawberryRockStart);});

		
		
	var html = "<table>" +
						 "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
						 "<tr><td>Description:</td> <td><input type='text' id='description'/></td> </tr>" +
						 "<tr><td></td><td><input type='button' value='Save & Close' onclick='saveData()'/></td></tr>";
	
	infowindow = new google.maps.InfoWindow({
	 content: html
	});
	var infowindow1 = new google.maps.InfoWindow;

	google.maps.event.addListener(map, "click", function(event) {
			marker = new google.maps.Marker({
				position: event.latLng,
				map: map
			});

			google.maps.event.addListener(marker, "click", function() {
				infowindow.open(map, marker);
			});
	});


	
	// Change this depending on the name of your PHP file
	downloadUrl1("output.php", function(data) {
		var xml = data.responseXML;
		var markers = xml.documentElement.getElementsByTagName("marker");
		for (var i = 0; i < markers.length; i++) {
			var name = markers[i].getAttribute("name");
			var address = markers[i].getAttribute("description");
			var point = new google.maps.LatLng(
					parseFloat(markers[i].getAttribute("lat")),
					parseFloat(markers[i].getAttribute("lng")));
			var html1 = "<b>" + name + "</b> <br/>" + address;
			var marker = new google.maps.Marker({
				map: map,
				position: point,
			});
			bindInfoWindow(marker, map, infowindow1, html1);
		}
	});



};
