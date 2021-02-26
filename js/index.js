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
})