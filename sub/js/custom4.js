$(function(){
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
    var listBtn = $("#howToShow .list_i");
    var thumBtn = $("#howToShow .thum_i");
    
    var container = $("#container");
    var section = container.find("section");
    var sectionList = container.find("section.list");
    var sectionThum = container.find("section.thum");
    
    sectionList.each(function(){
        var sLength = section.length;
        var listNum = Math.abs($(this).index() - sLength);
        $(this).prepend("<div class='list_num'>" + listNum + "</div>");
    });
    
    listBtn.click(function(){
        
        section.each(function(){
            $(this).removeClass("thum");
            $(this).addClass("list");
        });
        
        $(".list_num").show();
    });
    thumBtn.click(function(){
        
        section.each(function(){
            $(this).removeClass("list");
            $(this).addClass("thum");
        });
        
        $(".list_num").hide();
    });
    
    var secImg = section.find(">.imgBox>img");
    
    var moreH = 3*(container.outerHeight()+100) - 100;
    
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
        
        // list_num 보이기
        if($(window).width() < 640){
            $(".list_num").show();
        }
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
