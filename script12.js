$(document).ready( function() {
  var downEvents = 'touchstart MSPointerDown click';

  $('.menu-icon').on(downEvents, function() {
    $('.nav').addClass('open');
    return false;
  });

  $('.close-icon').on(downEvents, function() {
    $('.nav').removeClass('open');
    return false;
  });

  /*causeRepaintsOn = $("h1, h3, p, .nav-links a");

  $(window).resize(function() {
    causeRepaintsOn.css("z-index", 1);
  });*/

});