$(document).ready(function(){
    $('body').imagesLoaded(function(){
        
        var $window = $(window),
            _WH = $window.width(),
            $imgbox = $('.img-box').find('ul'),
            _length = $imgbox.find('li').length,
            swiping = true;
        
        if(_WH<776){

            $imgbox.css("width",_WH*_length);
            $imgbox.find('li').css("width",_WH);
            $imgbox.attr({
                "key":0,
                "length":_length,
            })

            var stringList = ""
            
            for (i=0;i<_length-1;i++){
                stringList += '<li></li>'
            }
            
            $imgbox.parent().append("<div class='slider-dot'><ul><li class='active'></li>"+stringList+"</ul></div>");
            
            var $sliderDotLi = $('.slider-dot li');
            
            $imgbox.on("swiperight",function(){

                if( swiping == false ){
                    return;
                }
                
                var thisKey = $(this).attr("key"),
                    nowLeft = $(this).css("left"), 
                    nowLeftInt = parseInt(nowLeft),
                    newLeft = nowLeftInt +_WH;
                
                if (thisKey==0){
                    return;
                }
                
                else{
                    swiping = false;
                    thisKey--;
                    $imgbox.css("left",newLeft);
                    $imgbox.attr("key",thisKey);
                    $sliderDotLi.removeClass("active").eq(thisKey).addClass("active");
                    setTimeout(turnOn,700);
                }
            });
            
            function turnOn(){
                swiping = true;
            }
            
            $imgbox.on("swipeleft",function(){
                
                if( swiping == false ){
                    return;
                }
                
                var thisKey = $(this).attr("key"),
                    nowLeft = $(this).css("left"), 
                    nowLeftInt = parseInt(nowLeft),
                    newLeft = nowLeftInt -_WH;
                
                
                if (thisKey==_length-1){
                    return;
                }

                else{
                    swiping = false;
                    thisKey++;
                    $imgbox.css("left",newLeft);
                    $imgbox.attr("key",thisKey);
                    $sliderDotLi.removeClass("active").eq(thisKey).addClass("active");
                    setTimeout(turnOn,700);
                }
            });
            
            var xDown = null;                                                        
            var yDown = null;    
            
            $imgbox.on('touchstart',function(evt){
                xDown = evt.touches[0].clientX;                                      
                yDown = evt.touches[0].clientY;      
            }, false);        
            
            $imgbox.on('touchmove', function(evt){
                if ( ! xDown || ! yDown ) {
                    return;
                }

                var xUp = evt.touches[0].clientX;                                    
                var yUp = evt.touches[0].clientY;

                var xDiff = xDown - xUp;
                var yDiff = yDown - yUp;

                if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
                    if ( xDiff > 0 ) {
                        /* left swipe */
                        if( swiping == false ){
                            return;
                        }

                        var thisKey = $(this).attr("key"),
                            nowLeft = $(this).css("left"), 
                            nowLeftInt = parseInt(nowLeft),
                            newLeft = nowLeftInt -_WH;


                        if (thisKey==_length-1){
                            return;
                        }

                        else{
                            swiping = false;
                            thisKey++;
                            $imgbox.css("left",newLeft);
                            $imgbox.attr("key",thisKey);
                            $sliderDotLi.removeClass("active").eq(thisKey).addClass("active");
                            setTimeout(turnOn,700);
                        }
                    } else {
                        /* right swipe */
                        if( swiping == false ){
                            return;
                        }

                        var thisKey = $(this).attr("key"),
                            nowLeft = $(this).css("left"), 
                            nowLeftInt = parseInt(nowLeft),
                            newLeft = nowLeftInt +_WH;

                        if (thisKey==0){
                            return;
                        }

                        else{
                            swiping = false;
                            thisKey--;
                            $imgbox.css("left",newLeft);
                            $imgbox.attr("key",thisKey);
                            $sliderDotLi.removeClass("active").eq(thisKey).addClass("active");
                            setTimeout(turnOn,700);
                        }
                    }                       
                } else {
                    if ( yDiff > 0 ) {
                        /* up swipe */ 
                    } else { 
                        /* down swipe */
                    }                                                                 
                }
                /* reset values */
                xDown = null;
                yDown = null; 
            }, false);

            
        }
    })
})