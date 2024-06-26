<!--live-1-->
// Set the date we're counting down to
var countDownDate0 = new Date("June 26, 2024 23:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now0 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance0 = countDownDate0 - now0;

  // Time calculations for days, hours, minutes and seconds
  var days0 = Math.floor(distance0 / (1000 * 60 * 60 * 24));
  var hours0 = Math.floor((distance0 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes0 = Math.floor((distance0 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds0 = Math.floor((distance0 % (1000 * 60)) / 1000);
  var teks0 = "To";

  // Display the result in the element with id="live1"
  document.getElementById("live1").innerHTML = days0 + "d " + hours0 + "h "
    + minutes0 + "m " + seconds0 + "s ";
 //   + minutes0 + "m " + seconds0 + "s " + teks0 + " KickOff";

  // If the count down is finished, write some text
  if (distance0 < 0) {
    clearInterval(x);
    document.getElementById("live1").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-2-->
// Set the date we're counting down to
var countDownDate1 = new Date("June 26, 2024 23:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now1 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance1 = countDownDate1 - now1;

  // Time calculations for days, hours, minutes and seconds
  var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24));
  var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live2"
  document.getElementById("live2").innerHTML = days1 + "d " + hours1 + "h "
    + minutes1 + "m " + seconds1 + "s ";

  // If the count down is finished, write some text
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("live2").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-3-->
// Set the date we're counting down to
var countDownDate2 = new Date("June 27, 2024 02:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now2 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance2 = countDownDate2 - now2;

  // Time calculations for days, hours, minutes and seconds
  var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live3"
  document.getElementById("live3").innerHTML = days2 + "d " + hours2 + "h "
    + minutes2 + "m " + seconds2 + "s ";

  // If the count down is finished, write some text
  if (distance2 < 0) {
    clearInterval(x);
    document.getElementById("live3").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-4-->
// Set the date we're counting down to
var countDownDate3 = new Date("June 27, 2024 02:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now3 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance3 = countDownDate3 - now3;

  // Time calculations for days, hours, minutes and seconds
  var days3 = Math.floor(distance3 / (1000 * 60 * 60 * 24));
  var hours3 = Math.floor((distance3 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes3 = Math.floor((distance3 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds3 = Math.floor((distance3 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live4"
  document.getElementById("live4").innerHTML = days3 + "d " + hours3 + "h "
    + minutes3 + "m " + seconds3 + "s ";

  // If the count down is finished, write some text
  if (distance3 < 0) {
    clearInterval(x);
    document.getElementById("live4").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-5-->
// Set the date we're counting down to
var countDownDate4 = new Date("June 27, 2024 05:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now4 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance4 = countDownDate4 - now4;

  // Time calculations for days, hours, minutes and seconds
  var days4 = Math.floor(distance4 / (1000 * 60 * 60 * 24));
  var hours4 = Math.floor((distance4 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes4 = Math.floor((distance4 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds4 = Math.floor((distance4 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live5"
  document.getElementById("live5").innerHTML = days4 + "d " + hours4 + "h "
    + minutes4 + "m " + seconds4 + "s ";

  // If the count down is finished, write some text
  if (distance4 < 0) {
    clearInterval(x);
    document.getElementById("live5").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-6-->
// Set the date we're counting down to
var countDownDate5 = new Date("June 27, 2024 08:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now5 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance5 = countDownDate5 - now5;

  // Time calculations for days, hours, minutes and seconds
  var days5 = Math.floor(distance5 / (1000 * 60 * 60 * 24));
  var hours5 = Math.floor((distance5 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes5 = Math.floor((distance5 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds5 = Math.floor((distance5 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live6"
  document.getElementById("live6").innerHTML = days5 + "d " + hours5 + "h "
    + minutes5 + "m " + seconds5 + "s ";

  // If the count down is finished, write some text
  if (distance5 < 0) {
    clearInterval(x);
    document.getElementById("live6").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-7-->
// Set the date we're counting down to
var countDownDate6 = new Date("June 11, 2024 19:30:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now6 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance6 = countDownDate6 - now6;

  // Time calculations for days, hours, minutes and seconds
  var days6 = Math.floor(distance6 / (1000 * 60 * 60 * 24));
  var hours6 = Math.floor((distance6 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes6 = Math.floor((distance6 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds6 = Math.floor((distance6 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live7"
  document.getElementById("live7").innerHTML = days6 + "d " + hours6 + "h "
    + minutes6 + "m " + seconds6 + "s ";

  // If the count down is finished, write some text
  if (distance6 < 0) {
    clearInterval(x);
    document.getElementById("live7").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);

<!--live-8-->
// Set the date we're counting down to
var countDownDateA = new Date("June 11, 2024 20:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var nowA = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceA = countDownDateA - nowA;

  // Time calculations for days, hours, minutes and seconds
  var daysA = Math.floor(distanceA / (1000 * 60 * 60 * 24));
  var hoursA = Math.floor((distanceA % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesA = Math.floor((distanceA % (1000 * 60 * 60)) / (1000 * 60));
  var secondsA = Math.floor((distanceA % (1000 * 60)) / 1000);

  // Display the result in the element with id="live7"
  document.getElementById("liveA").innerHTML = daysA + "d " + hoursA + "h "
    + minutesA + "m " + secondsA + "s ";

  // If the count down is finished, write some text
  if (distanceA < 0) {
    clearInterval(x);
    document.getElementById("liveA").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-9-->
// Set the date we're counting down to
var countDownDateB = new Date("June 12, 2024 01:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var nowB = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceB = countDownDateB - nowB;

  // Time calculations for days, hours, minutes and seconds
  var daysB = Math.floor(distanceB / (1000 * 60 * 60 * 24));
  var hoursB = Math.floor((distanceB % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesB = Math.floor((distanceB % (1000 * 60 * 60)) / (1000 * 60));
  var secondsB = Math.floor((distanceB % (1000 * 60)) / 1000);

  // Display the result in the element with id="live7"
  document.getElementById("liveB").innerHTML = daysB + "d " + hoursB + "h "
    + minutesB + "m " + secondsB + "s ";

  // If the count down is finished, write some text
  if (distanceB < 0) {
    clearInterval(x);
    document.getElementById("liveB").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
<!--live-10-->
// Set the date we're counting down to
var countDownDateC = new Date("June 06, 2024 23:00:00 GMT+07:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var nowC = new Date().getTime();

  // Find the distance between now and the count down date
  var distanceC = countDownDateC - nowC;

  // Time calculations for days, hours, minutes and seconds
  var daysC = Math.floor(distanceC / (1000 * 60 * 60 * 24));
  var hoursC = Math.floor((distanceC % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutesC = Math.floor((distanceC % (1000 * 60 * 60)) / (1000 * 60));
  var secondsC = Math.floor((distanceC % (1000 * 60)) / 1000);

  // Display the result in the element with id="live7"
  document.getElementById("liveC").innerHTML = daysC + "d " + hoursC + "h "
    + minutesC + "m " + secondsC + "s ";

  // If the count down is finished, write some text
  if (distanceC < 0) {
    clearInterval(x);
    document.getElementById("liveC").innerHTML = "LIVE NOW 🔴";
  }
}, 1000);
/*

// Set the date we're counting down to
var countDownDate7 = new Date(", 2023 21:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now7 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance7 = countDownDate7 - now7;

  // Time calculations for days, hours, minutes and seconds
  var days7 = Math.floor(distance7 /(1000 * 60 * 60 * 24));
  var hours7 = Math.floor((distance7 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes7 = Math.floor((distance7 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds7 = Math.floor((distance7 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live8"
  document.getElementById("live8").innerHTML = days7 + "d " + hours7 + "h "
    + minutes7 + "m " + seconds7 + "s ";

  // If the count down is finished, write some text
  if (distance7 < 0) {
    clearInterval(x);
    document.getElementById("live8").innerHTML = "🔴Live Now";
  }
}, 1000);
<!--live-9-->
// Set the date we're counting down to
var countDownDate8 = new Date("Oct 30, 2023 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now8 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance8 = countDownDate8 - now8;

  // Time calculations for days, hours, minutes and seconds
  var days8 = Math.floor(distance8 / (1000 * 60 * 60 * 24));
  var hours8 = Math.floor((distance8 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes8 = Math.floor((distance8 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds8 = Math.floor((distance8 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live9"
  document.getElementById("live9").innerHTML = days8 + "d " + hours8 + "h "
    + minutes8 + "m " + seconds8 + "s ";

  // If the count down is finished, write some text
  if (distance8 < 0) {
    clearInterval(x);
    document.getElementById("live9").innerHTML = "🔴Live Now";
  }
}, 1000);
<!--live-10-->
// Set the date we're counting down to
var countDownDate9 = new Date("Oct 21, 2023 20:30:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now9 = new Date().getTime();

  // Find the distance between now and the count down date
  var distance9 = countDownDate9 - now9;

  // Time calculations for days, hours, minutes and seconds
  var days9 = Math.floor(distance9 / (1000 * 60 * 60 * 24));
  var hours9 = Math.floor((distance9 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes9 = Math.floor((distance9 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds9 = Math.floor((distance9 % (1000 * 60)) / 1000);

  // Display the result in the element with id="live10"
  document.getElementById("live10").innerHTML = days9 + "d " + hours9 + "h "
    + minutes9 + "m " + seconds9 + "s ";

  // If the count down is finished, write some text
  if (distance9 < 0) {
    clearInterval(x);
    document.getElementById("live10").innerHTML = "🔴Live Now";
  }
}, 1000);*/
