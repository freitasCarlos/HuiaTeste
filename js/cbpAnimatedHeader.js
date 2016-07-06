/**
 * cbpAnimatedHeader.js v1.0.0
 * 2015
*/
 
var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '' ),
		didScroll = false,
		changeHeaderOn = 300;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 250 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			classie.add( header, '' );
		}
		else {
			classie.remove( header, '' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();