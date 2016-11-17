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
            
            function turnOn(){
                swiping = true;
            }
            
            $imgbox.touchwipe({
                wipeLeft: function() { 

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
                },
                wipeRight: function() {
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
                },
                min_move_x: 5,
                min_move_y: 5,
                preventDefaultEvents: true
            });
            
        }
    })
})