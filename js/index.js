let pos = $(window).scrollTop();
const white = "#fff";
const grey = "#212121";
let darkPosition;

$(function() {

    // Header 
    darkPosition = getPos();
    changeHeader(pos);
});

$(window).on('resize orientationchange', function(){

    // Header
    darkPosition = getPos();
});

document.addEventListener('scroll', function () {

    // Header
    pos = $(window).scrollTop();
    changeHeader(pos);
});

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
    console.log(isIn);
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




