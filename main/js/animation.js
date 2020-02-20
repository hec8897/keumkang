$(document).ready(function () {
    $('.head_ul li:nth-child(1)').mouseover(function () {
        $('nav').slideDown(300)
        $("nav .line").css({'width': "00%"})
        $("#nav_line1").delay(100).css({'width': "100%"})
    })
    $('.head_ul li:nth-child(2)').mouseover(function () {
        $('nav').slideDown(300)
        $("nav .line").css({'width': "00%"})
        $("#nav_line2").delay(100).css({'width': "100%"})
    })
    $('.head_ul li:nth-child(3)').mouseover(function () {
        $('nav').slideDown(300)
        $("nav .line").css({'width': "00%"})
        $("#nav_line3").delay(100).css({'width': "100%"})
    })
    $('.head_ul li:nth-child(4)').mouseover(function () {
        $('nav').slideDown(300)
        $("nav .line").css({'width': "00%"})
        $("#nav_line4").delay(100).css({'width': "100%"})
    })
    $('.head_ul li:nth-child(5)').mouseover(function () {
        $('nav').slideDown(300)
        $("nav .line").css({'width': "00%"})
        $("#nav_line5").delay(100).css({'width': "100%"})
    })
    $('.head_ul li:nth-child(6)').mouseover(function () {
        $('nav').slideDown(300)
        $("nav .line").css({'width': "00%"})
        $("#nav_line6").delay(100).css({'width': "100%"})
    })

    $('section').mouseover(function () {
        $("nav .line").css({'width': "00%"})
        $('nav').slideUp(300)
    })

    $('.panel_btn').hover(function(){
        $(this).toggleClass('active')
        console.log()
    })
})