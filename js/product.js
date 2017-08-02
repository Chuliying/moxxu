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
            
            if(_length==1){
                $('.next-btn').css("display","none");
            }

            var stringList = ""
            
            for (i=0;i<_length-1;i++){
                stringList += '<li></li>'
            }
            
            $imgbox.parent().append("<div class='slider-dot'><ul><li class='active'></li>"+stringList+"</ul></div>");
            
            var $sliderDotLi = $('.slider-dot li');
            
            function turnOn(){
                swiping = true;
            }
            
            var lastX;
            

            $('.pre-btn,.next-btn').click(function(){
                
                var thisDir = $(this).attr("dir");
                
                if(swiping == false){
                    return;
                }
                
                if(thisDir == "pre"){
                    if( swiping == false ){
                        return;
                    }

                    var thisKey = $imgbox.attr("key"),
                        nowLeft = $imgbox.css("left"), 
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
                    

                    if (thisKey!=_length-1){
                        $('.next-btn').fadeIn(700);
                    }

                    if (thisKey==0){
                        $('.pre-btn').fadeOut(700);
                    }
                }
                
                if(thisDir == "next"){
                    if( swiping == false ){
                        return;
                    }

                    var thisKey = $imgbox.attr("key"),
                        nowLeft = $imgbox.css("left"), 
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
                    

                    if (thisKey!=0){
                        $('.pre-btn').fadeIn(700);
                    }
                    
                    if (thisKey==_length-1){
                        $('.next-btn').fadeOut(700);
                    }
                }
            })
            
            $imgbox.bind('touchstart mousedown', function(e){
                lastX = e.originalEvent.touches ? 
                    e.originalEvent.touches[0].pageX : e.pageX;
            })
            
            $imgbox.bind('touchmove mousemove', function (e) {
                var currentX = e.originalEvent.touches ? 
                    e.originalEvent.touches[0].pageX : e.pageX;
                
                if(swiping == false){
                    return;
                }
                
                if (currentX > lastX + 40) {

                    // right
                    
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
                    
                    if (thisKey!=_length-1){
                        $('.next-btn').fadeIn(700);
                    }

                    if (thisKey==0){
                        $('.pre-btn').fadeOut(700);
                    }
                    
                }  
                
                if (currentX < lastX - 40 ){
                    
                    // left

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
                    
                    if (thisKey!=0){
                        $('.pre-btn').fadeIn(700);
                    }

                    if (thisKey==_length-1){
                        $('.next-btn').fadeOut(700);
                    }
                }
                
            });
        }
    })
})