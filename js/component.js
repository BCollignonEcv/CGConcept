/************ HEADER ************/ 
$('header #menu').click(function(){
    var menu = $('.c_menu-aside').toggleClass('active');
    if(menu.hasClass('active')){
        setTimeout(function() {
            $('#menu').text('close');
        }, 500);
    }else{
        setTimeout(function() {
            $('#menu').text('menu');
        }, 100);
    }
});

function echoToto(){
    console.log('toto');
}