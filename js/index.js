$('#homeLink').hide();

// $('.c_description h2').css({ opacity: 0, marginTop: "-30px" });
// $('.c_description .c_block-text p').css({ opacity: 0, marginTop: "-20px" });
// $('.c_index .c_index-item p').css({ opacity: 0, marginLeft: "-20px" });

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

    // $('section').each(function(){
    //     if($(this).hasClass('c_description')){
    //         if(pos > ($(this).offset().top - $(window).height() * .7)){
    //             $(this).find('.c_block-text p').each(() => {
    //                 // $(this).find('h2').css({ opacity: 1, marginTop: 0, transition: "margin .5s"});
    //                 $(this).find('.c_block-text p').css({ opacity: 1, marginTop: 0, transition: "margin .5s, opacity 1s"});
    //             });
    //         }
    //     }


            // $(this).find('.c_index-item p').each((index, element) => {
            //     console.log(element);
            //     element.css({ opacity: 1, marginLeft: "0", transition: "margin .7s"});
            // })
        }
    )

});

