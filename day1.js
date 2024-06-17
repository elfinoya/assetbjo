/* http://greentooth.xtgem.com
  */

// Get today's current date.
var now = new Date();

// Array list of days.
var days = new Array('Sun','Mon','Tue','Wed','Thu','Fri','Sat');

// Array list of months.
var months = new Array('Jan','Feb','Mar','Apr','May','June','July','Aug','Sept','Oct','Nov','Dec');

// Calculate the number of the current day in the week.
var date = ((now.getDate()<10) ? "0" : "")+ now.getDate();

// Calculate four digit year.
function fourdigits(number)	{
	return (number < 1000) ? number + 1900 : number;
								}

// Join it all together
today =  days[now.getDay()] + ", " +
              months[now.getMonth()] + " " +
               date + ", " +
                (fourdigits(now.getYear())) ;

// Print out the data.
document.write("" +today+ "");
