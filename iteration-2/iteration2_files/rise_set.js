
	//function to convert angles to radians
	function toRadians(angle){
		return angle * (Math.PI/ 180);
	};

	//function to convert radians to angles
	function toDegrees(angle){
		return angle * (180/Math.PI);
	};

	//Function to calculate sunrise and sunset based on date, longitude, and latitude
	//Refer to http://users.electromagnetic.net/bu/astro/sunrise-set.php for algorithms
	//Also was the big source for getting this function to run, credit to website owner
	function sunrise_set(lat,long){
		var one_day = 1000*60*60*24;
		var epoch_ms = 946713600000;
		var epoch_jd = 2451545;
		var error = 10800000;
		
		//Julian date
		var date = new Date();
		var date_ms = date.getTime();
		var jDate = Math.round( (date_ms - epoch_ms)/one_day + epoch_jd );

		//Julian Cycle
		var jCycle = Math.round( (jDate  - epoch_jd - 0.0009) - (long/360) );
		
		//Solar Noon
		var j = epoch_jd + 0.0009 + (long/360) + jCycle;
		var meanSolarAnom = (357.5291 + 0.98560028 * (j - epoch_jd)) % 360;
		var equationCenter = (1.9148 * Math.sin(toRadians(meanSolarAnom))) + (0.0200 * Math.sin(toRadians(2 * meanSolarAnom))) 
			+ (0.0003 * Math.sin(toRadians(3 * meanSolarAnom)));
		var sunElipLong = (meanSolarAnom + 102.9372 + equationCenter + 180) % 360;
		var solarNoon = j + (0.0053 * Math.sin(toRadians(meanSolarAnom))) - (0.0069 * Math.sin(toRadians(2 * sunElipLong)));
		
		//Hour angle based on declination of sun
		var sunDeclination = Math.asin(Math.sin(toRadians(sunElipLong)) * Math.sin(toRadians(23.45)));
		var hourAngle = toDegrees( Math.acos( (Math.sin(toRadians(-0.83)) - Math.sin(toRadians(lat)) * Math.sin(sunDeclination))
			/ (Math.cos(toRadians(lat)) * Math.cos(sunDeclination)) ) );
		
		//Julian date of sunrise and sunset
		var jAgain = epoch_jd + 0.0009 + ((hourAngle + long)/360) + jCycle;
		var jSet = jAgain + (0.0053 * Math.sin(toRadians(meanSolarAnom))) - (0.0069 * Math.sin(toRadians(2 * sunElipLong)));
		var jRise = solarNoon - (jSet - solarNoon);
		
		//Standardized date conversion including error correction for sunrise and sunset
		var rise = new Date( ((jRise - epoch_jd) * one_day) + epoch_ms - error);
		var set = new Date( ((jSet - epoch_jd) * one_day) + epoch_ms - error);
		
		return [rise,set];
	};


