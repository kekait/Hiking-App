
	// Creates variables for weather conditions and is currently pulling from only the Arcata API on wunderground.com
	// Will need to create different variables for areas other than arcata and pull the .json file from wunderground.com for each area... couldn't do it based on geolocation
	// If someoen can figure out how to do it via geolocation that would be awesome
	
	/*
	var weather = new XMLHttpRequest();
	weather.open("GET", "http://api.wunderground.com/api/e2d25049016cd0f7/conditions/q/CA/Arcata.json", false);
	weather.send(null);
	var r = JSON.parse(weather.response);
	var weather = r.current_observation.display_location.full;
	var temp = r.current_observation.temperature_string;
	var wind = r.current_observation.wind_string;    
*/
	
// Docs at http://simpleweatherjs.com


/* 
* Test Locations
* Austin lat/long: '30.2676,-97.74298'
* Austin WOEID: 2357536
*/

// Docs at http://simpleweatherjs.com


/* Where in the world are you? */


/* 
* Test Locations
* Austin lat/long: '30.2676,-97.74298'
* Austin WOEID: 2357536
*/

function loadWeather(location, woeid) {
  $.simpleWeather({
    location: location,
    woeid: woeid,
    unit: 'f',
    success: function(weather) {
      html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
      html += '<li class="currently">'+weather.currently+'</li>';
      html += '<li>'+weather.alt.temp+'&deg;C</li></ul>';  
      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
