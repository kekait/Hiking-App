
/*
Other stuff that may be added

      var sunrise = weather.sunrise;
      sunrise = sunrise.split(":");
      if(sunrise[1].length == 4){
          sunrise = sunrise[0] + ":0" +sunrise[1];
	  html+= '<li> Sunrise: '+sunrise+'</li>';
      }
      else{
      html += '<li> Sunrise: '+weather.sunrise+'</li>';
      }
	

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
      html = '<h2><img src="'+ weather.thumbnail+'"> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
      html += '<ul style="column-count:2" style="column-gap:1em"><li>'+weather.city+', '+weather.region+'</li>';
  
      html += '<li class="currently">'+weather.currently+'</li>'; 

      
      $("#weather").html(html);
    },
    error: function(error) {
      $("#weather").html('<p>'+error+'</p>');
    }
  });
}
