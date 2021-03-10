let pos = $(window).scrollTop();
const white = "#fff";
const grey = "#212121";
let darkPosition = getPos();

// Before Load
if(pos === 0){
    $('.c_block-text p').not('.c_slide-hidden').css({'opacity': '0', 'transition': '1.5s ease'});
    $('.c_block-title').css({'opacity': '0', 'transition': '1.5s ease'});
    $('.c_content-longText p').css({'opacity': '0', 'transition': '1.5s ease'});
    $('.c_index-item').css({'opacity': '0', 'transition': '1.5s ease'});
}

// DOM LOAD DONE
$(function() {

    // Header 
    darkPosition = getPos();
    changeHeader(pos);

    $('header #menu').click(function(){
        var menu = $('.c_menu-aside').toggleClass('active');
        if(menu.hasClass('active')){
            animateOpeningMenu();
            darkHeader();
        }else{
            animateClosingMenu();
            changeHeader(pos);
        }
    });
});

$(window).on('resize orientationchange', function(){

    // Header
    darkPosition = getPos();
});

document.addEventListener('scroll', function () {
    pos = $(window).scrollTop();

    // Load
    $('section').each(function(){
        if(pos + $(window).height() * heightDeviceAdaptation() > $(this).offset().top){
            $(this).find('.c_block-text p')
                .not('.c_slide-hidden')
                .css({'opacity': '1'})
            $(this).find('.c_block-title')
                .css({'opacity': '1'});
            $(this).find('.c_content-longText p')
                .css({'opacity': '1'});
            $(this).find('.c_index-item')
                .css({'opacity': '1'});
        }
    })

    // Header
    changeHeader(pos);
});

/****************************************/
/*************** LOADING ****************/
/****************************************/




/****************************************/
/**************** HEADER ****************/
/****************************************/

// Get position and height of given elements
function getPos(){
    let arrayPos = [];
    $('.a_hw-l').each(function(){
        elementPosition = [$(this).offset().top, $(this).offset().top + $(this).height()];
        arrayPos.push(elementPosition);
    })
    if($(window).width() < 995){
        $('.a_hw-s').each(function(){
            elementPosition = [$(this).offset().top, $(this).offset().top + $(this).height()];
            arrayPos.push(elementPosition);
        })
    }
    return arrayPos;
}

function changeHeader(scrollPosition){
    isIn = false;
    darkPosition.forEach(function(item){
        if(scrollPosition >= item[0] && scrollPosition + 50 < item[1]){
            isIn = true;
        }
    })
    if(isIn){
        lightHeader();
    }else{
        darkHeader();
    }
}

function lightHeader(){
    $('.c_menu a').css({
        color: white,
    });
    $('#menu').css({
        color: white,
    });
}

function darkHeader(){
    $('.c_menu a').css({
        color: grey,
    });
    $('#menu').css({
        color: grey,
    });
}

/****************************************/
/**************** SCROLL ****************/
/****************************************/

$('*[data-scroll]').on('click',function(){
    let element = $(`.${$(this).data('scroll')}`);
    $([document.documentElement, document.body]).animate({
        scrollTop: element.offset().top
    }, 500);
});


/****************************************/
/**************** CUSTOM ****************/
/****************************************/

function heightDeviceAdaptation(){
    if($(window).width() < 995){
        return 0.6;
    }else{
        return 0.5;
    }
}


