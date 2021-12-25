$(document).ready(function(){
    $('.your-class').slick({
      autoplay:3000
    });
});

$('.slider-for').slick({
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows:false,
  dots:true
});

$(function() {
  $(window).scroll(function() {
    if($(this).scrollTop() != 0) {
    $('#toTop').fadeIn();} 
    else {
    $('#toTop').fadeOut();
    }
  });
     
  $('#toTop').click(function() {
    $('body,html').animate({scrollTop:0},800);
  });
});
 
$(function() {
  $('.plugin__input_jmp').mask('+380000000000');
});

$('.menu_btn').on('click', function(){
  $('.menu_list').slideToggle();
});
