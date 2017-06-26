console.log('js sourced');
numClicks = 0;

$(document).ready(function(){
  console.log('jquery sourced');

  $('#generate').on('click', function(){
    console.log('generate click');
    numClicks += 1;
    $('.container').empty();
    $('.container').append('<div><p>'+ numClicks+ '</p></div>');
  });
}); //end of document.ready
