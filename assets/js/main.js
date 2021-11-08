$(document).ready(function(){


   $('.banner_info_btn').click(function() {
      $('.banner_info').toggleClass('active');
   });

   $('.burger').click(function() {
        $(this).toggleClass('active');
		   $('.header_nav').toggleClass('active');
    });



    if ($(window).width() <= '1024'){
      $('.header_number_container .header_number .arrow').click(function(){
        $('.header_number_container').toggleClass('active');
      });
    } else {
    }


    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

    $(".btn").on("click", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });

});

/*function windowSize(){
    if ($(window).width() <= '650'){
      $('.main_container_3_row').slick({
          dots: false,
          arrows: false,
          slidesToShow: 1,
          speed: 1000,
          autoplay: true,
          autoplaySpeed: 1000,
      });
    } else {
        $('.main_container_3_row').slick('unslick');
    }
}

$(window).on('load resize',windowSize);*/
