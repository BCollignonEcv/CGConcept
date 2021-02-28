$('#homeLink').hide();

$('section').each(function(index){
    if(index == 0){

    }else{
        $(this).children().fadeOut();
    }
});

$(window).on('keypress',function(e) {
    if(e.which == 103) {
        $('#gridTester').toggleClass('show');
    }
});

$('*[data-scroll]').on('click',function(){
    let element = $(`.${$(this).data('scroll')}`);
    $([document.documentElement, document.body]).animate({
        scrollTop: element.offset().top
    }, 500);
});

$(window).scroll(function (event) {
    let pos = $(window).scrollTop();

    if(pos === 0){
        $('#homeLink').hide();
    }else{
        $('#homeLink').fadeIn();
    }

    $('section').each(function(){
        if(pos > ($(this).offset().top - $(window).height() * 0.9)){
            console.log($(this), 'show');
            $(this).children().fadeIn('slow');
        }
    })
});

