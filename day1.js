/* http://bejo-tv1.blogspot.com
  */

// Get today's current date.


var months = ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agst', 'Sept', 'Okt', 'Nov', 'Des'];

var myDays = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

var date = new Date();

var tomorrow = new Date();

tomorrow.setDate(tomorrow.getDate() + 1);

var day = date.getDate() +1;

var month = date.getMonth();

var thisDay = date.getDay() +1,

    thisDay = myDays[thisDay];

var yy = date.getYear();

var year = (yy < 1000) ? yy + 1900 : yy;

document.write(thisDay + ', ' + day + ' ' + months[month] + ' ' + year);

