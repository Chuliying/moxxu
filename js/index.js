

$(document).ready(function(){

    $('body').imagesLoaded(function(){
        var $window = $(window),
            $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
            _winHeight = $(window).height(),
            _winWidth = $window.width(),
            _winRate = _winWidth / _winHeight;

        $body.fadeIn(1000);
        
        var _jf = _jf || [];_jf.push(['p','46219']);_jf.push(['_setFont','dats4','css','.dats4']);_jf.push(['_setFont','dats4','css','body']);_jf.push(['_setFont','dats4','alias','dats4']);_jf.push(['_setFont','dats4','english','Alegraya']);_jf.push(['_setFont','dats4','weight',400]);(function(f,q,c,h,e,i,r,d){var k=f._jf;if(k.constructor===Object){return}var l,t=q.getElementsByTagName("html")[0],a=function(u){for(var v in k){if(k[v][0]==u){if(false===k[v][1].call(k)){break}}}},j=/\S+/g,o=/[\t\r\n\f]/g,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,g="".trim,s=g&&!g.call("\uFEFF\xA0")?function(u){return u==null?"":g.call(u)}:function(u){return u==null?"":(u+"").replace(b,"")},m=function(y){var w,z,v,u,x=typeof y==="string"&&y;if(x){w=(y||"").match(j)||[];z=t[c]?(" "+t[c]+" ").replace(o," "):" ";if(z){u=0;while((v=w[u++])){if(z.indexOf(" "+v+" ")<0){z+=v+" "}}t[c]=s(z)}}},p=function(y){var w,z,v,u,x=arguments.length===0||typeof y==="string"&&y;if(x){w=(y||"").match(j)||[];z=t[c]?(" "+t[c]+" ").replace(o," "):"";if(z){u=0;while((v=w[u++])){while(z.indexOf(" "+v+" ")>=0){z=z.replace(" "+v+" "," ")}}t[c]=y?s(z):""}}},n;k.push(["_eventActived",function(){p(h);m(e)}]);k.push(["_eventInactived",function(){p(h);m(i)}]);k.addScript=n=function(u,A,w,C,E,B){E=E||function(){};B=B||function(){};var x=q.createElement("script"),z=q.getElementsByTagName("script")[0],v,y=false,D=function(){x.src="";x.onerror=x.onload=x.onreadystatechange=null;x.parentNode.removeChild(x);x=null;a("_eventInactived");B()};if(C){v=setTimeout(function(){D()},C)}x.type=A||"text/javascript";x.async=w;x.onload=x.onreadystatechange=function(G,F){if(!y&&(!x.readyState||/loaded|complete/.test(x.readyState))){y=true;if(C){clearTimeout(v)}x.src="";x.onerror=x.onload=x.onreadystatechange=null;x.parentNode.removeChild(x);x=null;if(!F){setTimeout(function(){E()},200)}}};x.onerror=function(H,G,F){if(C){clearTimeout(v)}D();return true};x.src=u;z.parentNode.insertBefore(x,z)};a("_eventPreload");m(h);n(r,"text/javascript",false,3000)})(this,this.document,"className","jf-loading","jf-active","jf-inactive","//d3gc6cgx8oosp4.cloudfront.net/js/stable/v/5.0.2/id/199036455129");
        
        landing(0);

        // mobile

        if (_winWidth< 776){
            $('.index-wrapper .header').css("min-height",_winHeight + "px");

            $window.scroll(function(){

                var now = $window.scrollTop();

                if( now > _winHeight*0.6 ){
                    $('.index-about-container').addClass('index-about-animate');
                    //$('.fixed-nav').css("opacity",1);
                }

                else{
                    $('.index-about-container').removeClass('index-about-animate');
                    //$('.fixed-nav').css("opacity",0);
                }

            });

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

function landing(i){

    if (i==3){
        return;
    }

    var needOpacity = [
        $('.header-bg'),
        $('.slogan'),
        $('.nav-zone,.scroll-btn')
    ]

    needOpacity[i].css('opacity',1);
    i++;
    setTimeout("landing("+i+")",1200);
}