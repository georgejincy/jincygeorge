$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('#startchange');
   var offset = startchange.offset();


  //Change background color of navbar when scrolling
  if (startchange.length){
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $(".navbar-default").css('background-color', '#2357c1');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
  }

  //Trigger tooltips for social icons
  $('[data-toggle="tooltip"]').tooltip({placement : 'bottom'});   

});