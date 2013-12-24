$(document).ready( function() {
	var downEvents = 'touchstart MSPointerDown click';

	$('.open-nav').on(downEvents, function() {
		$('.nav').addClass('open');
		return false;
	});
	    
	$('.close-nav').on(downEvents, function() {
		$('.nav').removeClass('open');
		return false;
	});

});