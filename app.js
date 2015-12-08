var main = function(){
  $('.dropdown-toggle').click(function(){
    $('.dropdown-menu').toggle();
  });

  $('.dot').click(function(){
    var currentDot = $('.dot');
    var nextDot = currentDot.next();

    if(currentDot.last()){
      nextDot = $('.dot').first();
    }
    currentDot.removeClass('.activeDot');
    nextDot.addClass('.activeDot');
  });
};

$(document).ready(main);
