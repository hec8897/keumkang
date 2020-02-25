$(document).ready(function () {
  
    $('section').mouseover(function () {
        $("nav .line").css({'width': "00%"})
        $('nav').slideUp(300)
    })

    $('.panel_btn').hover(function(){
        $(this).toggleClass('active')
    })


})

