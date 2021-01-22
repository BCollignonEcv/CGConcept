$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll === 0){
        $('#sect-carte').removeClass('scrolled');
        $('.c_nav').removeClass('scrolled');
    }else{
        $('#sect-carte').addClass('scrolled');
        $('.c_nav').addClass('scrolled');
    }
});

$('header .c_nav-icon').click(function(){
    if($('.c_nav-aside').hasClass('open')){
        $('.c_nav-aside').removeClass('open');
        $('.c_nav-aside').addClass('close');
    }else{
        $('.c_nav-aside').addClass('open');
        $('.c_nav-aside').removeClass('close');
    }
});

$('*[data-scroll]').click(function(){
    let target = $(this).data('scroll');
    if($('.c_nav-aside').hasClass('open')){
        $('.c_nav-aside').removeClass('open');
        $('.c_nav-aside').addClass('close');
    }
    if(target === 'sect-home'){
        $('html, body').animate({
            scrollTop: ($('#'+ target).offset().top)
        }, 1000);
    }else{
        $('html, body').animate({
            scrollTop: ($('#'+ target).offset().top + 10)
        }, 1000);
    }
});

