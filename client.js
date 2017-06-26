console.log('js sourced');

$(document).ready(function(){
  console.log('jquery sourced');

  $('#generate').on('click', function(){
    console.log('generate click');
    $('.container').append('<div></div>');
  });
}); //end of document.ready
