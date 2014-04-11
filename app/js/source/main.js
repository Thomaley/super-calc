(function() {
  'use strict';

  $(document).ready(initialize);

  function initialize() {
    $('.number').click(number);
    $('.clear').click(clear);
    $('.dec').click(dec);
    $('.sign').click(sign);
    $('#title').click(title);
  }

  function title() {
    var display = $('#calculator').css('display');

    if(display === 'none'){
      $('#calculator').fadeIn();
    }else{
      $('#calculator').fadeOut();
    }
  }

  function number() {
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0'){
      output = num;
    } else {
      output += num;
    }

    $('#display').text(output);
  }

  function clear() {
    var content = this.textContent;
    if(content === 'C'){
      $('#display').text(0);
    }
  }

  function dec() {
    var display = $('#display').text();
    var noDecimal = display.indexOf('.') === -1;

    if(noDecimal){
      $('#display').text(display + '.');
    }
  }

  function sign() {
    var display = $('#display').text();
    $('#display').text(display * -1);
  }

})();
