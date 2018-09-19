
import './sass/styles.scss';
import 'bootstrap';
import $ from 'jquery';
import 'slick-carousel';

require('slick-carousel/slick/slick.css');




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

// Attempted jquery-slideshow implementation

$(document).ready(function(){
  $(".slider").slick({
    infinite: true,
    initialSlide: '2',

  });

  $(".screenshots img").click(function(){
    $('.overlay').show();
    $('.img-carousel').css("visibility", "visible");
    $('.overlay').click(function(){
      $('.overlay').hide();
      $('.img-carousel').css("visibility", "hidden");

    });

  })
})
