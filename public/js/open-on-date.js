function thanksgivingDate(year)  {
	var november = new Date(year, 10, 1);
	if (november.getDay() == 4) {
		return november.getDate() + 21;
	} else {
	if (november.getDay() == 5 || november.getDay() == 6) {
		var moveToThursday = 11 - november.getDay();
	} else {
		var moveToThursday = 4 - november.getDay();
	}
	return november.getDate() + moveToThursday + 21;
	}
}

function open(year, month, day, week, hour) {			  
		  if (year === undefined) {
		  	   var date = new Date();
		  		yearDate = date.getFullYear(); 	
		  }
		  if (month === undefined) {
		  	   var date = new Date();
		  		monthDate = date.getMonth(); 	
		  }
		  if (day === undefined) {
		  	   var date = new Date();
		  		dayDate = date.getDate(); 	
		  }
		  if (week === undefined) {
		  	   var date = new Date();
		  		weekDate = date.getDay(); 	
		  }

		  if (hour === undefined) {
		  	   var date = new Date();
		  		hourDate = date.getHours(); 	
		  }
	        
        var newyear = new Date(year, 0,1);
        var independence = new Date (year, 6, 4);
        var christmas = new Date(year, 11, 25);
        var thanksgiving = new Date(year, 10, thanksgivingDate(year));
		  var holidayMonth = [newyear.getMonth(), independence.getMonth(), thanksgiving.getMonth(), christmas.getMonth()];
		  var holidayDay = [newyear.getDate(), independence.getDate(), thanksgivingDate(year), christmas.getDate()];
		  var holidayName = ["New Year's Day", "4th of July", "Thanksgiving", "Christmas"];
		  
		  for (var i = 0; i < holidayMonth.length; i++) {
				if (month == holidayMonth[i] && day == holidayDay[i]) {
					return "Today is " + holidayName[i] + ".  I'm enjoying my time off.";
				}
		  	}
        	
        if (week == 0 || week == 6) {
	        return "Hello, it's the weekend.  If you must talk, I'm available upon request.  Otherwise, I'm not available at this time.";
        }
        if (hour >= 7 && hour <= 19) {
	        return "Hello, I'm available to talk.  My hours are from 7:00AM - 8:00PM.";
        } else { 
	        return "Sorry, but I'm not available to talk.  My hours are from 7:00AM - 8:00PM.";
        }
}



   
			var date = new Date();		
			var hours = open(date.getFullYear(), date.getMonth(), date.getDate(), date.getDay(), date.getHours());
			document.getElementById("container").innerHTML = "<h3>" + hours + "</h3>";