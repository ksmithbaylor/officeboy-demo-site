(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({height: 300, indicators: false, interval: 5000});

    $('.side-nav li a').click(function() {
      $('.button-collapse').sideNav('hide');
    });

  });
})(jQuery);
