

$(document).ready(function(){

    $('body').imagesLoaded(function(){
        var $window = $(window),
            $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
            _winHeight = $(window).height(),
            _winWidth = $window.width(),
            _winRate = _winWidth / _winHeight;
        
        landing(0);
        
        // mobile
        
        if (_winWidth< 776){
            $('.header').css("min-height",_winHeight + "px");
            
            $window.scroll(function(){

                var now = $window.scrollTop();

                if( now > _winHeight*0.6 ){
                    $('.index-about-container').addClass('index-about-animate');
                    $('.fixed-nav').css("opacity",1);
                }

                else{
                    $('.index-about-container').removeClass('index-about-animate');
                    $('.fixed-nav').css("opacity",0);
                }

            });
        }
        
        // end
        
        if(_winWidth>776){
            // 首頁 about animate
            $window.scroll(function(){

                var now = $window.scrollTop();

                if( now > _winHeight*0.6 ){
                    $('.index-about-container').addClass('index-about-animate');
                    $('.fixed-nav').fadeIn(500);
                }

                else{
                    $('.index-about-container').removeClass('index-about-animate');
                    $('.fixed-nav').fadeOut(500);
                }

            });
        }
        
        $('.scroll-btn').click(function(){
            $body.animate({
                scrollTop: _winHeight - 68
            }, 700);
        })
        
       
        
    })
})

function landing(i){

    if (i==4){
        return;
    }
    
    var needOpacity = [
        $('.header-bg'),
        $('.slogan'),
        $('.nav-zone:first-child'),
        $('.scroll-btn')
    ]
    
    needOpacity[i].addClass('no-opacity');
    i++;
    setTimeout("landing("+i+")",1200);
}