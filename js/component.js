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
    var body = $('body');
    var menu = $('.c_menu-aside');

    // Animate body to the left
    // body.animate({
    //     marginLeft: '-50vw'
    // }, 400);

    // Animate menu to the left
    menu.animate({
        left: '0'
    },{
        duration: 300,
        specialEasing: {
          left: "swing"
        }
    });

    setTimeout(function() {
        $('#menu').text('Fermer');
    }, 500);
}

function animateClosingMenu(){
    var body = $('body');
    var menu = $('.c_menu-aside');
    // Animate body to normal
    // body.animate({
    //     marginLeft: '0'
    // }, 300);

    // Animate menu to the right
    menu.animate({
        left: '100vw'
    },{
        duration: 400,
        specialEasing: {
          left: "swing"
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

$('.c_bestOf-item').hover(function(){
    console.log($(this).data('img'));
    $('.c_bestOf-img').children('img').fadeToggle('slow');
});