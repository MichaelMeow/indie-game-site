
import './sass/styles.scss';
import 'bootstrap';

console.log("hi.");

// Creating a countdown timerbackground. This, uh, it doesn't really work yet.

var releaseDate = new Date("Oct 1, 2018 00:00:00").getTime();

var time = setInterval(function() {
  var now = new Date().getTime();
  var distance = releaseDate - now;
  var days = Math.floor(distance / (1000*60*60*24));
  var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
  var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  if (distance < 0) {
    clearInterval(time);
    document.getElementById("timer").innerHTML = "Spooky Scary Forest Is Out NOW!";
  }
}, 1000);
