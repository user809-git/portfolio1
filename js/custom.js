$(document).ready(function(){
    var ht = $(window).height();
    var topBox = $(".top");
    topBox.height(ht);

    $(window).on("resize", function(){
        var ht = $(window).height();
        topBox.height(ht);
        
    });
    
    // 1 gnb ---------------------------------------------//
//    var header = $("header");
//    $(window).scroll(function(){
//        var sct = $(this).scrollTop()
//        var topY = -1 * sct;
//        
//        if(sct > 0 && sct < 85){
//            header.stop().animate({"top":topY}, 700);
//        } else if (sct == 85){
//            header.stop();
//        } else if (sct == 0){
//            header.stop().css({"top":"0"});
//            header.prepend("<div class='headerBack'></div>").fadeout(3000);
//        }
//        console.log(header.offset());
//        
//    });
    
    
    // 2 contents ---------------------------------------------//
    var windowheight = $(window).height();
    var delayPosition = 100;
    
    $(window).scroll(function() {
        var content2 = $(".contents.under");
        var content3 = $(".contents.third");
        var content4 = $(".contents.fourth");
        var content5 = $(".contents.last");
        
        var slide = $("#slide");
        var position = $(this).scrollTop() + windowheight - delayPosition;
        
        if(position > content2.offset().top) {
            content2.addClass("up");
        }
        if(position > content3.offset().top) {
            content3.addClass("up");
        }
        if(position > content4.offset().top) {
            content4.addClass("up");
        }
        if(position > content5.offset().top) {
            content5.addClass("up");
        }
        if(position > slide.offset().top) {
            slide.addClass("up");
        }
    });
        
    
    // 3 슬라이드 slide news ---------------------------------------------//
    var slideBox = $("#slideBox>ul");
    var news = slideBox.find(">li");
    var titles = $(".subTitle");
    var next = $("#next");
    var prev = $("#prev");

    var newsWidth = news.innerWidth();
    var slideLength = news.length;
    
    var current = 0;

    next.on("click", function(){       
        prev.addClass("active");
        move();
        
        if(current == slideLength-1) {
            next.removeClass();
        }
    });
    prev.on("click", function(){
        next.addClass("active");
        pre_move();
        
        if(current == 0) {
            prev.removeClass();
        }
    });

    function move() {
        var n = current+1;
        if(current == slideLength-1) return;
        
        var next1 = -1*n*newsWidth;
        var moveFigure = next1 + "px";
        
        slideBox.stop().animate({"left": next1});
        current = n;
    }
    function pre_move() {
        var n = current-1;
        if(current == 0) return;
        
        var prev1 = -1*n*newsWidth;
        var moveFigure = prev1 + "px";
        
        slideBox.stop().animate({"left": prev1});
        current = n;
    }
    
    // 5 스크롤탑 gotoTop ---------------------------------------------//
//    $(window).scroll(function(){
//        if($(this).scrollTop() > 300){
//            $("#gotoTop").fadeIn(500);
//        } else {
//            $("#gotoTop").fadeOut(500);
//        }
//    });
//    $("#gotoTop").click(function(){
//        $("html, body").animate({scrollTop:0}, 1000);
//        console.log("up");
//    });
    
});