(function() {
  // var $timerElement = $("#timer");
  // var weddingDate = new Date('02-28-2020');
  // var today = Date.now();
  // var dateDiff = weddingDate - today;






  // Set the date we're counting down to
  var countDownDate = new Date("Feb 28, 2020 21:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    if (distance < 0) {
      distance = now - countDownDate;
      var marriedEle = document.getElementById('married-text');
      marriedEle.innerHTML = 'got married on'
      var countingEle = document.getElementById('counting-text');
      countingEle.innerHTML = 'married since';
    }

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    var daysEle = document.getElementById("days");
    var hoursEle = document.getElementById("hours");
    var minutesEle = document.getElementById("minutes");
    var sencondsEle = document.getElementById("seconds");
    var daysText = 'days';
    var hoursText = 'hours';
    var minutesText = 'minutes';
    var secondsText = 'seconds';

    if (days === 1) {
      daysText = 'day';
    }
    if (hours === 1) {
      hoursText = 'hour';
    }
    if (minutes === 1) {
      minutesText = 'minute';
    }
    if (seconds === 1) {
      secondsText = 'second';
    }

    daysEle.innerHTML = '<span>' + days + '</span>' + '<span class="timer-subtext">' + daysText + '</span>';
    hoursEle.innerHTML = '<span>' + hours + '</span>' + '<span class="timer-subtext">' + hoursText + '</span>';
    minutesEle.innerHTML = '<span>' + minutes + '</span>' + '<span class="timer-subtext">' + minutesText + '</span>';
    sencondsEle.innerHTML = '<span>' + seconds + '</span>' + '<span class="timer-subtext">' + secondsText + '</span>';


  }, 1000);










})();


function initMap() {
  // The location of Uluru
  var uluru = {lat: 23.066384, lng: 70.117546};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 15, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}