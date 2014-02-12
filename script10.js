$(document).ready( function() {
	
	var list = $('.nav-links a')

	// viewport sized text:
	causeRepaintsOn = $("h1, p, a, span.author, input");

	$(window).resize(function() {
		causeRepaintsOn.css("z-index", 1);
	});


	// menu open/close func   
	var downEvents = 'touchstart MSPointerDown click';

	$('.open-nav').on(downEvents, function() {
		$('.nav').addClass('open');
		return false;
	});
	    
	$('.close-nav').on(downEvents, function() {
		$('.nav').removeClass('open');
		return false;
	});

	// clear search field when focus on it
	var search_field = $('.search input');
	search_field.on('focus', function(){
		search_field.val('');
		search_field.on('blur', function(){
			search_field.val('search');
			$(list).show();
		})
	})

	search_field.on('blur', function() {
		console.log('out of search input')
	})

	// search functionality
	search_field.on('keyup', function(e) {
		var inputText = search_field.val().toLowerCase(),
			inputTextLength = inputText.length;

		$(list).hide()

		for (var i = 0; i < list.length; i++) {
			if ( inputText == list[i].text.substr(0, inputTextLength).toLowerCase() ) {
				$(list[i]).show();
			};
		};
	});

});