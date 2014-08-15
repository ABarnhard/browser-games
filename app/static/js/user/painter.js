(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addColor);
    $('#colors').on('click', '.color', makeSelected);
  });

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
