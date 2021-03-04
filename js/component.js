/************ HEADER ************/ 
$('header #menu').click(function(){
    var menu = $('.c_menu-aside').toggleClass('active');
    if(menu.hasClass('active')){
        animateOpeningMenu();
    }else{
        animateClosingMenu();
    }
});

function animateOpeningMenu(){
    var menu = $('.c_menu-aside');
    let pos = $(window).scrollTop();

    if(pos === 0){
        $('#homeLink').fadeIn();
    }

    // Animate menu to the left
    menu.animate({
        left: '0'
    },{
        duration: 300,
        specialEasing: {
          left: "easeOutExpo"
        }
    });

    setTimeout(function() {
        $('#menu').text('Fermer');
    }, 500);
    
}

function animateClosingMenu(){
    var menu = $('.c_menu-aside');
    let pos = $(window).scrollTop();

    if(pos === 0){
        $('#homeLink').fadeOut();
    }
    // Animate menu to the right
    menu.animate({
        left: '100vw'
    },{
        duration: 400,
        specialEasing: {
          left: "easeOutExpo"
        }
    });
    setTimeout(function() {
        $('#menu').text('menu');
    }, 100);
}

/************ SLIDE ************/ 

$('.c_index .c_slide').click(function(){
    let item = $(this);
    if($(window).width() < 995){
        slide(item);
    }
});

$('.c_description .c_slide').click(function(){
    let item = $(this);
    slide(item);
});

function slide(element){
    element.children('.c_slide-hidden' ).slideToggle(function() {
        if(element.children('.c_slide-hidden' ).is(':hidden')){
            element.find('span.c_text-floatRight').text('+');
        }else{
            element.find('span.c_text-floatRight').text('−');
        }
    });
}

/************ BESTOF ************/ 

$('.c_bestOf-item').mouseenter(function(){
    $('.c_bestOf-item').removeClass('active');
    $(this).addClass('active');
    $('.c_bestOf-img').stop(1,1).fadeOut("fast");
    $('.c_bestOf-img').eq($(this).data('img')).stop(1,1).fadeToggle('slow');
});