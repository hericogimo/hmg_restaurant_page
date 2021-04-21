$(function(){

    $(".navMenuBt").click(function(){
        $(".navbar-collapse").slideToggle();
        $(".navbar-collapse").toggleClass("shadown");
    })

    $(window).scroll(function(){
        $(".navbar").toggleClass("wh", $(this).scrollTop() > 300)
    })

    new WOW().init();
})