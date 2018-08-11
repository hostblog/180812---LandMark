/**
 * JS/jQuery functions
 */
jQuery(document).ready(function($) {
	window.sr = ScrollReveal();
	sr.reveal('.scroll-normal', {
		duration: 1500,
		delay: 300,
		distance: '100px',
		scale: 0.5,
		reset: true,
		useDelay: 'onload'
	});
	sr.reveal('.scroll-duration', {
		duration: 1600,
		rotate: 20
	}, 200);
	
	$('#nav-bg').click(function(event) {
		var h1 = $('#header');
		var h1in = $('#header .nav-inner');
		var h2 = $('#order-form');
		var h2in = $('#order-form .nav-inner');

		// Close #header if opened
		if( h1.hasClass('opened') ){
			h1.animate({left: '-280px'}, 500).removeClass('opened');
			h1in.animate({left: '-280px'}, 500);
			$(this).fadeOut();
			$('#hambuger').animate({left: 0}, 400).removeClass('opened');
		}

		// Close #order-form if opened
		if( h2.hasClass('opened') ){
			h2.animate({right: '-280px'}, 500).removeClass('opened');
			h2in.animate({right: '-280px'}, 500);
			$(this).fadeOut();
			$('#order-cta').animate({right: 0}, 400).removeClass('opened');
		}
		
		return false;
	});

	$('#hambuger').click(function(event) {
		var h = $('#header');
		var hin = $('#header .nav-inner');
		var hbg = $('#nav-bg');
		if( h.hasClass('opened') ){
			h.animate({left: '-280px'}, 500).removeClass('opened');
			hin.animate({left: '-280px'}, 500);
			hbg.fadeOut();
			$('#hambuger').animate({left: 0}, 400).removeClass('opened');
		}
		else{
			h.animate({left: 0}, 500).addClass('opened');
			hin.animate({left: 0}, 500);
			hbg.fadeIn();
			$('#hambuger').animate({left: '280px'}, 400).addClass('opened');
		}
		return false;
	});
	
	$('#order-cta').click(function(event) {
		var h = $('#order-form');
		var hin = $('#order-form .nav-inner');
		var hbg = $('#nav-bg');
		if( h.hasClass('opened') ){
			h.animate({right: '-280px'}, 500).removeClass('opened');
			hin.animate({right: '-280px'}, 500);
			hbg.fadeOut();
			$('#order-cta').animate({right: 0}, 400).removeClass('opened');
		}
		else{
			h.animate({right: 0}, 500).addClass('opened');
			hin.animate({right: 0}, 500);
			hbg.fadeIn();
			$('#order-cta').animate({right: '150px'}, 400).addClass('opened');
		}
		return false;
	});

	// Tabbed
	if( $('body').find('.tabbed').length ) {
		$('body').find('.tabbed').each(function(index, el) {
			var t = $(this);
			t.find('.tab-content:first').show();
			t.find('.tab-title').each(function(index, el) {
				$(this).find('li:first').addClass('active');
			});
			t.find('.block-inner').each(function(index, el) {
				$(this).find('.tab-content:first').show();
			});
		});

		$('.tab-title a').click(function(event) {
			event.preventDefault();

			if( $(this).parent('li').hasClass('active') )
				return false;

			var tab = $(this).attr('href');
			$(this).parent('li').addClass('active').siblings('.active').removeClass('active');
			$(tab).show().siblings('.tab-content').hide();

			if( $(this).parent('li').hasClass('lv1') ){
				$(tab).find('.tab-title').each(function(index, el) {
					$(this).find('li:first').addClass('active');
				});

				$(tab).find('.tab-row').each(function(index, el) {
					$(this).find('.tab-content:first').show();
				});
			}
		});
	}
	
	$('.scroll-to > a').click(function(event) {
		var dest = $(this).attr('href');

		if( $('body').hasClass('home') ){
			event.preventDefault();
			dest = dest.substring( dest.indexOf( '#' ) );
			var top = $(dest).offset().top;
			$('html, body').animate({'scrollTop': top}, 500);
		}
	});

	$('#nav-bg').height( $(document).height() );
	
	$(window).resize(function() {
		$('#nav-bg').height( $(document).height() );
	})
});