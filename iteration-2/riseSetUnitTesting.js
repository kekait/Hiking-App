//OFF BY 3 HOURS


var long = -124.013674;
var lat = 41.329373;

function toRadians(angle){
	return angle * (Math.PI/ 180);
};
function toDegrees(angle){
	return angle * (180/Math.PI);
}

function julianDate() {
  //Get 1 day in milliseconds
  var one_day=1000*60*60*24;
  //Jan 1, 2000 in milliseconds
  var epoch_ms = 946713600000;
  var date = new Date();
  var date_ms = date.getTime();

  // Calculate the difference in milliseconds
  var difference_ms = date_ms - epoch_ms;
   
  return  Math.round( difference_ms/one_day + 2451545 );
};


function julianCycle(jDate){
	return Math.round( (jDate  - 2451545 - 0.0009) - (long/360) );
};

function solarNoon(jCycle){
	var epoch_ms = 946713600000;
  var one_day=1000*60*60*24;

	var j = 2451545 + 0.0009 + (long/360) + jCycle;
	var meanSolarAnom = (357.5291 + 0.98560028 * (j - 2451545)) % 360;
	var equationCenter = (1.9148 * Math.sin(toRadians(meanSolarAnom))) + (0.0200 * Math.sin(toRadians(2 * meanSolarAnom))) 
  	+ (0.0003 * Math.sin(toRadians(3 * meanSolarAnom)));
  var sunElipLong = (meanSolarAnom + 102.9372 + equationCenter + 180) % 360;
  var solarNoon = j + (0.0053 * Math.sin(toRadians(meanSolarAnom))) - (0.0069 * Math.sin(toRadians(2 * sunElipLong)));
  
  var sunDeclination = Math.asin(Math.sin(toRadians(sunElipLong)) * Math.sin(toRadians(23.45)));
	//var sunDeclination =toDegrees( Math.asin(Math.sin(toRadians(sunElipLong)) * Math.sin(toRadians(23.45))) );
  //return sunDeclination;

	// var hourAngle = Math.acos( (Math.sin(toRadians(-0.83)) - Math.sin(toRadians(lat)) * Math.sin(sunDeclination))
  //	/ (Math.cos(toRadians(lat)) * Math.cos(sunDeclination)) );
   
   var hourAngle = toDegrees( Math.acos( (Math.sin(toRadians(-0.83)) - Math.sin(toRadians(lat)) * Math.sin(sunDeclination))
  	/ (Math.cos(toRadians(lat)) * Math.cos(sunDeclination)) ) );
	//return hourAngle;
	var jAgain = 2451545 + 0.0009 + ((hourAngle + long)/360) + jCycle;
	//return jAgain;
  var jSet = jAgain + (0.0053 * Math.sin(toRadians(meanSolarAnom))) - (0.0069 * Math.sin(toRadians(2 * sunElipLong))) ;
 	var jRise = solarNoon - (jSet - solarNoon);
  
  //return jRise;
 
 var rise = new Date( ((jRise - 2451545) * one_day) + epoch_ms ) ;
 var set = new Date( ((jSet - 2451545) * one_day) + epoch_ms ) ;
  return rise;
};


document.getElementById("demo1").innerHTML = julianDate();
document.getElementById("demo2").innerHTML = julianCycle( julianDate() );
document.getElementById("demo3").innerHTML = solarNoon( julianCycle( julianDate() ) );