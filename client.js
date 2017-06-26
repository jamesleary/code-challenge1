console.log('js sourced');
numClicks = 0;

$(document).ready(function(){
  console.log('jquery sourced');
generateClick();

swap();
deleteB();


}); //end of document.ready

function generateClick (){
  $('#generate').on('click', function(){
    console.log('generate click');
    numClicks += 1;
var $el = $('<div id ="moreButtons"><p>' + numClicks +'</p></div>');
    $('.boxes').append('<div id ="moreButtons"><p>' + numClicks +
        '<button id="Swap">Swap</button>' + '<button id ="Delete">Delete</button>'+ '</p></div>');


  });
}//end of generateClick




function swap (){
  $('.boxes').on('click','#Swap', function(){
    console.log('swap clicked');
    $(this).parent().css("background-color","yellow");
});
}//end of swap, function is called within generateClick so it can see the button ID's
//that were appended
function deleteB(){
  $('.boxes').on('click','#Delete', function(){
    console.log('delete clicked');
      $(this).parent().remove();
  
  });
}
