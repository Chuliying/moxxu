$(document).ready(function(){
    $('body').imagesLoaded(function(){
        
        var $window = $(window),
            _WH = $window.width(),
            $imgbox = $('.img-box').find('ul'),
            _length = $imgbox.find('li').length;
        
        if(_WH<776){

            $imgbox.css("width",_WH*_length);
            $imgbox.find('li').css("width",_WH);

            var stringList = ""
            
            for (i=0;i<_length-1;i++){
                stringList += '<li></li>'
            }
            
            $imgbox.parent().append("<div class='slider-dot'><ul><li class='active'></li>"+stringList+"</ul></div>");
            
            $('img').on("swipeleft",function(){
                alert();
            });
            
            $("img").on("swipe",function(){
                $(this).hide();
            });
            
        }
    })
})