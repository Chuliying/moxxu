$(document).ready(function(){
    $('body').imagesLoaded(function(){

        var lightboxArarry = [],
            $LightboxContainer = $('.concept-slider .main-box'),
            _lightboxWidth = $LightboxContainer.width(),
            _lightboxHeight = $LightboxContainer.height(),
            N = "next-btn",
            B = "pre-btn",
            PX = "px",
            Lclick = true,
            $menuli = $('.section-menu li'),
            $window = $(window);
        
        
        $menuli.click(function(){
            var _liIndex = $(this).index();
            $menuli.removeClass('active').eq(_liIndex).addClass('active');
            $('.slider').fadeOut(700);
            $('.slider').eq(_liIndex).fadeIn(700);
            
        })

        $('.slider').eq(0).fadeIn(700);
        
        $window.scroll(function(){

            var _now = $window.scrollTop(),
                _height = $window.height()*0.75;
            
            if ( _now > _height){
                $('.concept-bg').addClass("animated");    
            }

            else{
                $('.concept-bg').removeClass("animated");    
            }
            

        });        
        
        function turnOn(){
            Lclick = true;
        }

        $('.concept-slider .slider-box').each(function(){
            var $this = $(this),
                $thisUl = $(this).find('ul'),
                $thisLi = $(this).find('li'),
                _length = $thisLi.length;

            console.log(_lightboxHeight);
            $thisUl.css("width",_length*_lightboxWidth);
            $thisLi.css("width",_lightboxWidth);
            $this.css("height",_lightboxHeight);
            $this.attr({
                "length":_length,
                "step":0
            });
            
            $('.next-btn,.pre-btn,.slide-dot li').click(function(){
                var _thisV = $(this).index(),
                    $this = $(this).parent().find('.slider-box'),
                    $thisUl = $this.find('ul'),
                    $thisLi = $this.find('li'),
                    $sliderDot = $this.parent().find('.slide-dot').find('ul').find('li');
                    _length = $thisLi.length,
                    S = parseInt($this.attr("step")),
                    P = parseInt($thisUl.css("left")),
                    I = $(this).attr("class");

                if (Lclick == false){
                    return;
                }
                
                if((I == undefined)||(I == "")){

                    var $sliderDot = $(this).parent().find('li');
                    $this = $(this).parent().parent().parent().find('.slider-box'),
                        $thisUl = $this.find('ul'),
                        $thisLi = $this.find('li'),
                        _length = $thisLi.length,
                        whereGo =  -_thisV*_lightboxWidth,
                        S = _thisV;

                    Lclick = false;
                    $sliderDot.removeClass('active').eq(S).addClass('active');
                    $this.attr("step",S);
                    $thisUl.css("left",whereGo);
                    setTimeout(turnOn,700);
                    console.log(S,_length);
                }
                
                if ( (S == 0)&&(I == B) ){
                    return;
                }
                
                if ( (S == _length-1)&&(I==N) ){
                    return;
                }

                if (I == N){
                    Lclick = false;
                    P -= _lightboxWidth;
                    $thisUl.css("left",P);
                    S+=1;
                    $sliderDot.removeClass('active').eq(S).addClass('active');
                    $this.attr("step",S);
                    setTimeout(turnOn,700);
                }

                if (I == B){
                    Lclick = false;
                    P += _lightboxWidth;
                    $thisUl.css("left",P);
                    S-=1;
                    $sliderDot.removeClass('active').eq(S).addClass('active');
                    $this.attr("step",S);
                    setTimeout(turnOn,700);
                }

                if (S == 0){
                    $this.parent().find('.pre-btn').fadeOut(400);
                }

                else{
                    $this.parent().find('.pre-btn').fadeIn(400);
                }

                if (S == _length-1){
                    $this.parent().find('.next-btn').fadeOut(400);
                }

                else{
                    $this.parent().find('.next-btn').fadeIn(400);
                }
            })
        })    
    })

})
