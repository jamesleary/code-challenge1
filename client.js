console.log('js sourced');
numClicks = 0;

$(document).ready(function(){
  console.log('jquery sourced');
generateClick();


}); //end of document.ready

function generateClick (){
  $('#generate').on('click', function(){
    console.log('generate click');
    numClicks += 1;
    $('.container').empty();
    $('.container').append('<div id ="moreButtons"><p>' + numClicks +
        '<button>Swap</button>' + '<button>Delete</button>'+ '</p></div>');

  });
}
