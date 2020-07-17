$(document).ready(function(){
    var ht = $(window).height();
            var topBox = $(".top");
            topBox.height(ht);
            
            $(window).on("resize", function(){
                var ht = $(window).height();
                topBox.height(ht);
            });
    // 1 gnb ---------------------------------------------//
//    var header = $("header #head");
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
//        }
//    });
    
    // 2 컨텐츠 박스 contents section ---------------------------------------------//
    var container = $("#container");
    var section = container.find("section");
    var secImg = section.find(">.imgBox>img");
    var moreH = 3*(container.outerHeight()+100) - 100;
    
    section.mouseenter(function(){
        $(this).find(">.txtBox").stop().fadeOut();
    });
    section.mouseleave(function(){
        $(this).find(">.txtBox").stop().fadeIn();
    });
    
        // scroll animation--
    
    var windowheight = $(window).height();
    var nowScroll = $(window).scrollTop();
    var delayPosition = 100;
    
    $(document).ready(function(){
        floatUp();
    });
    $(window).on("scroll", function(){
        floatUp();
    });
    
    $(window).on("resize", function(){
        insertSectionFloat();
    });
    
    function floatUp() {
        var position = $(window).scrollTop() + windowheight;
        var readySection = $("section.ready");
        
        readySection.each(function(){
            if(!$(this).hasClass("up") && $(this).data('offsetTop') < position){
                $(this).addClass('up');
                $(this).removeClass('ready');
            }
        });
    }
    
    function insertSectionFloat() {
        windowheight = $(window).height();
        
        $("section.target").each(function(){
            var thisTop = $(this).offset().top;
            $(this).data('offsetTop', thisTop);
        });
    }
    
    (function init() {
        insertSectionFloat();
    })();
    
    
    // 3 더보기 moreBtn ---------------------------------------------//
    $("#moreBtn").append("<div class='downLine'></div>");
    
    var container = $("#container");
    
    $("#moreBtn").click(function(){
        var num = 0;
        var section = container.children("section");
        var secH = section.outerHeight();
        var conH = container.outerHeight();
        var conHeight = 3*(secH + 100);
        var maxHeight = (section.length-1) * (secH + 100) - conHeight;
        
        if (conH < maxHeight) {
            num += 1;
            container.stop().animate({"height": '+=' + conHeight });
        } else if(conH >= maxHeight - conHeight || num > 2) {
            num = 2;
            container.stop().animate({"height": '+=' + conHeight });
            $("#moreBtn").hide();
        } else return;
    });
    
    
    // 5 스크롤탑 gotoTop ---------------------------------------------//
//    $(window).scroll(function(){
//        if(nowScroll > 300){
//            $("#gotoTop").fadeIn(500);
//        } else {
//            $("#gotoTop").fadeOut(500);
//        }
//    });
//    $("#gotoTop").click(function(){
//        $("html, body").animate({scrollTop:0}, 700);
//    });
//    
});