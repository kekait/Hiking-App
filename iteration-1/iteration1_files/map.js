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
		maxZoom: 15,
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
	})


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



	//Descriptions for each trail
	var kloppContString = 	'<h2>Klopp Lake</h2>'+
							kloppDistance.toFixed(2) + 'mi';
	var lostManContString = '<h2>Lost Man Trail</h2>'+
							lostManDistance.toFixed(2) + 'mi';
	var hikshariContString = '<h2>Hikshari Trail</h2>'+
							hikshariDistance.toFixed(2) + 'mi';
	var redwoodParkContString = '<h2>Redwood Park</h2>'+
							redwoodParkDistance.toFiexed(2) + 'mi';


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

	var tester = document.getElementById("redwoodpark");
	tester.addEventListener('click',function(){
		map.setCenter(redwoodParkStart);});

	var infoWindow = new google.maps.InfoWindow;
	// Change this depending on the name of your PHP file
}
