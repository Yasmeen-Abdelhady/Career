//start
$(function(){
    var li=$('.navbar .navbar-nav .nav-item');
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('.resume').offset().top-300){
            $('.resume .move').addClass('t');
            $('.navbar .navbar-nav #resume').addClass('active').siblings().removeClass('active');
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('.services').offset().top-300){
            $('.services .move').addClass('t');
            $('.navbar .navbar-nav #services').addClass('active').siblings().removeClass('active');  
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('.portfolio').offset().top-300){
            $('.portfolio .move').addClass('t');  
            $('.navbar .navbar-nav #portfolio').addClass('active').siblings().removeClass('active');
        }
    });
     $(window).scroll(function(){
        if($(window).scrollTop()>=$('.Testimonial').offset().top-300){
            $('.Testimonial .move').addClass('t'); 
            $('.navbar .navbar-nav #testimonial').addClass('active').siblings().removeClass('active'); 
        }
    });
     $(window).scroll(function(){
        if($(window).scrollTop()>=$('.contact').offset().top-300){
            $('.contact .move').addClass('t'); 
            $('.navbar .navbar-nav #contact').addClass('active').siblings().removeClass('active'); 
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()<=$('.resume').offset().top-299){
            $('.navbar .navbar-nav #home').addClass('active').siblings().removeClass('active');
        }
    });
//    end
    $(window).scroll(function(){
        if($(window).scrollTop()>=$('.resume').offset().top){
            $('.em-progress .progress .progress-bar').addClass('pro');
        }
    })
    $('.image .pic').hover(function(){
        $(this).find($('.slide')).addClass('show');
    }, function(){
        $(this).find($('.slide')).removeClass('show');
    });
    $('.pic button').click(function(){
        var image=$($(this).parent('.slide').siblings('img')).attr('src');
        var num=$($(this).parent('.slide').siblings('img')).data('num');
        $('.popup .inner img').attr('src',image);
        $('.popup .inner .num').text('image '+num+' of 6');
        // console.log($($(this).parent('.slide').siblings('img')).data('num'));
        $('.popup').fadeIn();
    });
    $('.popup , .popup i').click(function(){
        $('.popup').fadeOut();
    });
    $('.popup .inner').click(function(e){
        e.stopPropagation();
    });
    $(window).scroll(function(){
        if($(window).scrollTop()>=150){
            $('.angle-up').fadeIn();
        }
        else{
            $('.angle-up').fadeOut();
        }
    });
    $('.angle-up').click(function(){
        $('html,body').animate({scrollTop:0},600);
    });
    $('.check .agree').click(function(){
        $(this).find('i').toggle().parent('.square').toggleClass('d');
        // $(this).find('.square').toggleClass('d');
    });


    // $(window).load(function(){
    //     $('.loading').fadeOut(1000);
    // });
    $('.navbar .navbar-nav .nav-item a').click(function(){
        $(this).parent('li').addClass('active').siblings().removeClass('active');
        $('html , body').animate({
            scrollTop:$($(this).data('scroll')).offset().top
        }, 1000);
        window.console.log($(this).data('scroll'));
    });
    $('.image ul li').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
        $($(this).data('value')).fadeIn(500);
        console.log($(this).data('value'));
        $('.pic').parent().not($(this).data('value')).fadeOut(500);
    });
});
// var map;

// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }
// $(window).load(function(){
//    $('body').css("overflow","auto");
//    $('.loading').fadeOut(1000);
// });
$(window).on('load',function(){
    $('.loading').delay(1000).fadeOut(1000 , function(){
        $('body').css("overflow","auto");
    });
});
// $(window).load(function(){
//     $('.loading').fadeOut(1000);
// });