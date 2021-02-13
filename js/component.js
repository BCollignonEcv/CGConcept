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
    body.animate({
        marginLeft: '-50vw'
    }, 400);

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
        $('#menu').text('close');
    }, 500);
}

function animateClosingMenu(){
    var body = $('body');
    var menu = $('.c_menu-aside');
    // Animate body to normal
    body.animate({
        marginLeft: '0'
    }, 300);

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