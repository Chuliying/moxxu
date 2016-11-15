

$(document).ready(function(){

    $('body').imagesLoaded(function(){
        var $window = $(window),
            $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
            _winHeight = $(window).height(),
            _winWidth = $window.width(),
            _winRate = _winWidth / _winHeight,
            $productItem = $('.about-prouct .product'),
            $aboutSlider = $('#about-slider'),
            $menuli = $('.section-menu li');
        
        // loading
        
        $body.fadeIn(1000);
        
        // 產品
        
        
        if($productItem.length != 0){
            
            $window.scroll(function(){

                var _now = $window.scrollTop(),
                    _value = _now*0.135,
                    transformV = "translateY("+ _value +"px)";
                
                $productItem.css("transform",transformV);

            });

            // section menu

            $menuli.click(function(){
                var thisKey = $(this).index(),
                    toGo = $('.main-container').eq(thisKey).offset().top;

                $body.animate({
                    scrollTop: toGo - 68
                }, 700);    

            })
            
        }
      
        
        // slider
        
        clicking = false;
        
        if($aboutSlider.length != 0){
            
            
            
            var $sliderText = $('.slider-text'),
                $sliderBg = $('.slider-bg'),
                _slideLength = $sliderText.length,
                $slideDot = $('#slideDot li');
                
            
            changeSlide(0);
            
            function changeSlide(i){
                
                if ( clicking == true ){

                    return;
                }
                $sliderText.stop().fadeOut(700);
                $sliderBg.stop().fadeOut(700);
                $slideDot.removeClass("active").eq(i).addClass("active");    
                $sliderText.eq(i).stop().fadeIn(1200);
                $sliderBg.eq(i).stop().fadeIn(1200);
                
              
                
                if ( i < _slideLength-1 ){
                    i++;
                }
                
                else{
                    i=0;
                }
                
                setTimeout(
                    function(){
                    changeSlide(i);
                }
                ,4000);
            }
            
            $slideDot.click(function(){

                var i = $(this).index();
                clicking = true;
                $sliderText.stop().fadeOut(700);
                $sliderBg.stop().fadeOut(700);
                $slideDot.removeClass("active").eq(i).addClass("active");    
                $sliderText.eq(i).stop().fadeIn(1200);
                $sliderBg.eq(i).stop().fadeIn(1200);

            })
        }
        
        
        // mobile
        
        if (_winWidth< 776){
//            
//            $window.scroll(function(){
//
//                var now = $window.scrollTop();
//
//                if( now > _winHeight*0.6 ){
//                    $('.index-about-container').addClass('index-about-animate');
//                }
//
//                else{
//                    $('.index-about-container').removeClass('index-about-animate');
//                }
//
//            });
            
            $('.fixed-nav').fadeIn(500).css("opacity",1);
            
            $('.menu-btn').click(function(){
                $('.header .fixed-nav ul').fadeToggle(700);
                $(this).toggleClass('menu-active');
            })
        }
        
        // end
        
        if(_winWidth>776){
            // 首頁 about animate
            $window.scroll(function(){

                var now = $window.scrollTop();

                if( now > 250 ){
                    $('.fixed-nav').fadeIn(500);
                }

                else{
                    $('.fixed-nav').fadeOut(500);
                }

            });
        }
        
        $('.scroll-btn').click(function(){
            
            if (_winWidth>776){
                $body.animate({
                    scrollTop: _winHeight - 68
                }, 700);    
            }
            else{
                $body.animate({
                    scrollTop: _winHeight - 50
                }, 700);    
            }
        })
        
       
        
    })
})