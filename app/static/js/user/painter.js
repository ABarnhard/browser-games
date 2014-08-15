(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addColor);
    $('#colors').on('click', '.color', makeSelected);
    $('#canvas').on('mouseenter', '.pixel', paint);
    makeCanvas();
  });

  function paint(){
    var color = $('#selected').css('background-color');
    $(this).css('background-color', color);
  }

  function makeCanvas(){
    for(var i = 0; i < 10000; i++){
      var $s = $('<div>');
      $s.addClass('pixel');
      $('#canvas').append($s);
    }
  }

  function addColor(){
    var $c = $('<div>');
    $c.addClass('color');
    $c.css('background-color', $('input[type=color]').val());
    $('#colors').append($c);
  }

  function makeSelected(){
    var color = $(this).css('background-color');
    $('#selected').css('background-color', color);
  }

})();
