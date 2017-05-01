$(function(){

  var turn = 1;

  $('.cell').on('click', function(){
    if ($(this).hasClass('x') || $(this).hasClass('o')) {
      window.alert('Nope');
    } else {
    if (turn % 2 === 0) {
      $(this).addClass('x')
    } else {
      $(this).addClass('o');
    }
    turn++;
    }
  });

});
