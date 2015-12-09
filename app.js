var main = function(){
  $('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggle();
  });

  $('.next-arrow').click(function() {
    var currentSlide = $('.active-slide');
    var nextSlide = currentSlide.next();

    var currentDot = $('.active-dot');
    var nextDot = currentDot.next();

    if(nextSlide.length === 0) {
      nextSlide = $('.main').first();
      nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(0).removeClass('active-slide');
    nextSlide.fadeIn(800).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
  });

  $('.prev-arrow').click(function(){
    var currentSlide = $('.active-slide');
    var prevSlide = currentSlide.prev();

    var currentDot = $('.active-dot');
    var prevDot = currentDot.prev();

    if(prevSlide.length === 0){
      prevSlide = $('.main').last();
      prevDot = $('.dot').last();
    }
    currentSlide.fadeOut(0).removeClass('active-slide');
    prevSlide.fadeIn(800).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
  });
};

$(document).ready(main);
