// loader
$('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
$(window).on('load', function () {
    setTimeout(removeLoader, 2000);
});
function removeLoader() {
    $("#loadingDiv").fadeOut(500, function () {
        $("#loadingDiv").remove();
    });
}
// loader


// fadeindown fadeinleft bounce js

// scroll down navbar 
	window.onscroll = function() {scrollFunction()};
	
	function scrollFunction() {
	  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    document.getElementById("navbar").style.top = "0";
	  } else {
	    document.getElementById("navbar").style.top = "-100px";
	  }
	}
// .scroll down navbar ends

//side bar
$(document).ready(function () {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').removeClass('active');
    });

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').addClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });
});
// side bar ends
$(function() {
    $('.scroll-down').click (function() {
      $('html, body').animate({scrollTop: $('section.ok').offset().top }, 'slow');
      return false;
    });
  });

  //slick scripts
  $(document).on('ready', function() {
    $(".regular").slick({
      dots: false,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    });
  });
  //slick scripts ends here
  
  // fadeindown fadeinleft bounce js
jQuery(function($) {
  var doAnimations = function() {
      var offset = $(window).scrollTop() + $(window).height(),
  $animatables = $('.animatable');
  if ($animatables.length == 0) {
$(window).off('scroll', doAnimations);
}
$animatables.each(function(i) {
 var $animatable = $(this);
      if (($animatable.offset().top + $animatable.height() - 20) < offset) {
  $animatable.removeClass('animatable').addClass('animated');
      }
});
};
$(window).on('scroll', doAnimations);
$(window).trigger('scroll');
});

// fadein effect ends here

//hover and active div on nav pills
$( ".arrow-down" ).click(function(){
  $(this).toggleClass('active');
});