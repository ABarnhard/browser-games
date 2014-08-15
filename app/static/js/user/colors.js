(function(){
  'use strict';

  $(document).ready(function(){
    $('#controls > button').click(addBoxes);
    $('#boxes').on('mouseenter', '.box', paintBackground);
    $('#boxes').on('mouseleave', '.box', makeWhite);
  });

  function paintBackground(){
    var color = $(this).css('background-color');
    // console.log(color);
    $('body').css('background-color', color);
  }

  function makeWhite(){
    $('body').css('background-color', 'white');
  }

  function addBoxes(){
    var count = $('input[name=count]').val();
    for(var i = 0; i < count; i++){
      var $box = $('<div>');
      $box.addClass('box');
      $box.css('background-color', randomColor());
      $('#boxes').prepend($box);
    }
  }

  function randomColor(){
    var r = Math.floor(Math.random() * 256),
        g = Math.floor(Math.random() * 256),
        b = Math.floor(Math.random() * 256),
        a = Math.random(),
        str = 'rgba(' + r + ',' + g + ',' + b +',' + a + ')';
    return str;
  }
})();


